
import axios from "axios"
import { useEffect, useState } from "react"
import Loaded from "../../components/loaded"
import { SiPanasonic } from "react-icons/si"
import ProductCard from "../../components/product-card"

export function ProductsPage() {
    const [productList, setProductList] = useState([])
    const [productLoaded, setProductLoaded] = useState(false)
    useEffect(() => {
        if (!productLoaded) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then(
                (res) => {
                    setProductList(res.data)
                    setProductLoaded(true)
                })
        }




    }, [productLoaded]
    )
    return (
        <div className="h-full w-full">
            {
                productLoaded ?
                    <div className="w-full h-full flex flex-wrap justify-center items-center gap-4 p-4">
                        {
                            productList.map((product) => {
                                return (
                                    <ProductCard key={product.productId} product={product}/>
                                )


                            })
                        }

                    </div>
                    :
                    <Loaded />
            }

        </div>
    )
}