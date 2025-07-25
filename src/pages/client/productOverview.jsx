import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loaded from "../../components/loaded";
import { useEffect, useState } from "react";
import ImageSlider from "../../components/imageSlider";

export function ProductOverview() {
    const params = useParams()
    if (params.id == null) {
        window.location.href = "/products"
    }

    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (status == "loading") {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product/" + params.id).then(
                (res) => {
                    console.log(res)
                    setProduct(res.data);
                    setStatus("loaded");

                }
            ).catch((error) => {
                toast.error("Failed to load product details");
                setStatus("error");
            })
        }
    }, [status]
    )
    return (
        <div className="w-full h-full" >
            {
                status == "loading" && <Loaded />


            }
            {
                status == "loaded" &&
                <div className="w-full h-full flex ">
                    <div className="w-[50%] h-full  ">
                        <ImageSlider images={product.images} />
                    
                    </div>
                    <div className="w-[50%] h-full bg-blue-900 ">
                        
                    </div>

                </div>


            }
            {
                status == "error" && <div>
                    Error
                </div>


            }

        </div>
    )
}
