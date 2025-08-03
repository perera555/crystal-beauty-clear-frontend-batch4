import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loaded from "../../components/loaded";
import { useEffect, useState } from "react";
import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utils/cart";

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
                    setProduct(res.data.product);
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
                    <div className="w-[50%] h-full  p-[40px] ">
                        <h1 className="text-3xl font-bold text-center mb-[40px]">{product.name} {" | "}<span className="text-3xl mr-[20px] text-gray-500 ">{product.altName.join(" |")}</span></h1>


                        <div className="w-full flex justify-center mb-[40px]">

                            {
                                product.labledPrice > product.price ? (
                                    <>
                                        <h2 className="text-3xl mr-[20px]  "> LKR:{product.price.toFixed(2)}</h2>
                                        <h2 className="text-3xl line-through text-gray-500">LKR:{product.labledPrice.toFixed(2)}</h2>
                                    </>
                                ) : (

                                    <h2 className="text-3xl font-semibold text-center">LKR:{product.price}</h2>
                                )
                            }

                        </div>
                        <h2 className="text-3xl font-semibold text-center text-gray-500"> LKR:{product.price.toFixed(2)}</h2>
                        <p className=" text-xl text-center text-gray-500 mb-[40px]">{product.description}</p>
                        <div className="w-full flex justify-center mb-[40px]">
                            <button className="bg-pink-800 border border-pink-800  cursor-pointer text-white px-[20px] py-[10px] rounded-lg hover:bg-white hover:text-pink-800 transition-all duration-300" onClick={() => {
                                addToCart(product, 1);
                                toast.success("product Added to cart");
                            }}>Add to Cart</button>
                            <button className="bg-pink-800  border border-pink-800 cursor-pointer text-white px-[20px] py-[10px] rounded-lg hover:bg-white hover:text-pink-800 transition-all duration-300 ml-[20px]">Buy Now</button>

                        </div>
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