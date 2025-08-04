import axios from "axios";
import { useEffect, useState } from "react";


export default function AdminOrdersPage() {
    const [order, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(
        () => {
            if (!loaded) {
                const token = localStorage.getItem("token")
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/order", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }).then(
                    (response) => {
                        console.log(response.data)
                        setOrders(response.data)
                        setLoaded(true)

                    }

                )

            }

        })


    return (
        <div className="w-full h-full bg-red-900">


        </div>

    )
}