import axios from "axios";
import { useEffect, useState } from "react";
import Loaded from "../../components/loaded";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";



export default function AdminOrdersPage() {
    const [order, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [modelIsDisplaying, setModelIsDisplaying] = useState(false);
    const [displayingorder, setDisplayingOrder] = useState(null);
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
                        setOrders(response.data)
                        setLoaded(true)


                    }

                )

            }

        }, [loaded]
    )
    function changeOrderStatus(orderId, status) {
        const token = localStorage.getItem("token");
         axios.put(import.meta.env.VITE_BACKEND_URL + "/api/order"+orderId, {
            status: status
        }, {
            headers: {
              Authorization: "Bearer " + token

            },
        }
        ).then(
            () => {
            toast.success("status changed update successfully");
            setLoaded(false)

        })



    }

    return (
        <div className="w-full h-full">
            {
                loaded ? (

                    <div className="w-full h-full " >
                        <table className="w-full ">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer Email</th>
                                    <th>Customer Name</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Total</th>
                                    <th>Date</th>
                                    <th>Actions</th>


                                </tr>

                            </thead>
                            <tbody>
                                {
                                    order.map((order) => {
                                        return (

                                            <tr key={order.orderId} className=" border-b-2 border-gray-300 text-center cursor-pointer hover:bg-gray-100"

                                            >
                                                <td className="p-2">{order.email}</td>
                                                <td className="p-2">{order.name}</td>
                                                <td className="p-2">{order.address}</td>
                                                <td className="p-2">{order.phoneNumber}</td>
                                                <td className="p-2">
                                                    <select value={order.status} className="z-[50]" onChange={(e) => {
                                                        changeOrderStatus(order.orderId, e.target.value)

                                                    }

                                                    }>
                                                        <option value={"Pending"}>Pending</option>
                                                        <option value={"Deliverd"}>Deliverd</option>
                                                        <option value={"Cancelled"}>Cancelled</option>
                                                        <option value={"Processing"}>Processing</option>
                                                    </select>

                                                </td>
                                                <td className="p-2">{order.total.toFixed(2)}</td >
                                                <td className="p-2">{new Date(order.date).toDateString()}</td>
                                                <td className="p-2">
                                                    <button className="bg-gray-700 text-white p-2 rounded-lg" onClick={() => {
                                                        setModelIsDisplaying(true)
                                                        setDisplayingOrder(order)
                                                    }} >Details</button>
                                                </td>
                                            </tr>
                                        )

                                    }
                                    )
                                }
                            </tbody>
                        </table>
                        {
                            modelIsDisplaying &&
                            <div className="fixed bg-[#00000070] w-full h-full top-0 left-0 flex justify-center items-center ">
                                <div className="w-[600px] max-w-[600px] h-[600px] max-h-[600px]  bg-white relative">
                                    <div className="w-full h-[150px] ">
                                        <h1 className="text-sm font-bold p-2">Order ID:{displayingorder.orderId}</h1>
                                        <h1 className="text-md font-bold  p-2">Order Date :{new Date(displayingorder.date).toDateString()}</h1>
                                        <h1 className="text-md font-bold  p-2">Order Status :{displayingorder.status}</h1>
                                        <h1 className="text-md font-bold  p-2">Order Total :{displayingorder.total.toFixed(2)}</h1>

                                    </div>
                                    <div className="w-full h-[450px] max-h-[450px] overflow-y-scroll ">
                                        {
                                            displayingorder.billItems.map((item, index) => {
                                                return (
                                                    <div key={index} className="w-full h-[100px] bg-white shadow-2xl my-[5px] flex justify-between items-center relative">
                                                        <img src={item.image} className="h-full aspect-square object-cover" />
                                                        <div className="h-full max-w-[300px] w-[300px] overflow-hidden">
                                                            <h1 className="text-xl font-bold">{item.productName}</h1>
                                                            <h2 className="text-lg text-gray-500">LKR: {item.price.toFixed(2)}</h2>
                                                            <h2 className="text-lg text-gray-500 ">Quantity: {item.quantity}</h2>

                                                        </div>

                                                    </div>
                                                )

                                            })
                                        }
                                    </div>

                                    <button className="w-[40px] absolute top-[-20px] right-[-20px] h-[40px] rounded-full  bg-white shadow shadow-black flex justify-center items-center cursor-pointer"
                                        onClick={() => {
                                            setModelIsDisplaying(false)


                                        }}>
                                        <IoCloseSharp />
                                    </button>

                                </div>

                            </div>
                        }

                    </div>
                )
                    :
                    <Loaded />

            }
        </div>

    )
}