import { TbTrash } from "react-icons/tb";
import {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function checkoutPage() {
    const location = useLocation();
    const [cart, setCart] = useState(location.state.items);
    const [cartRefreshed, setCartRefreshed] = useState(false);
    const navigate = useNavigate();
    function getTotal(){
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        } )  
        return total
    }
    function getTotalForLabledPrice(){
        let total = 0;
        cart.forEach((item) => {
            total += item.labledPrice * item.quantity;
        } )  
        return total
    }
  
    return (
        <div className="w-full h-full flex justify-center p-[40px] ">
            <div className="w-[800px]">
                {
                    cart.map((item, index) => {
                        return (
                            //dose not work
                            <div key={index} className=" w-full h-[140px] bg-white shadow-2xl my-[5px] flex justify-between items-center relative ">
                                <button className="absolute right-[-50px] bg-red-500 w-[40px] h-[40px] rounded-full text-white flex justify-center items-center shadow cursor-pointer"
                                    onClick={() => {
                                        const newcart = cart.filter((product)=> product.productId !== item.productId);
                                        setCart(newcart);
                                        setCartLoaded(false);

                                    }}>
                                    <TbTrash />
                                </button>

                                <img src={item.image} className="h-full aspect-square object-cover " />
                                <div className="h-full max-w-[300px] w-[300px] overflow-hidden">
                                    <h1 className="text-xl font-bold">{item.name}</h1>
                                    <h2 className="text-lg  text-gray-500">{item.altName.join(" | ")}</h2>
                                    <h2 className="text-lg  text-gray-500">Price: LKR: {item.price.toFixed(2)}</h2>

                                </div>
                                <div className="h-full w-[100px] flex  justify-center items-center">
                                    <button className="text-2xl w-[30px] h-[30px] bg-black text-white rounded-full flex justify-center items-center cursor-pointer mx-[5px]"
                                        onClick={() => {
                                            const newcart = cart
                                            newcart[index].quantity -= 1;
                                            if (newcart[index].quantity <= 0) newcart[index].quantity = 1;
                                            setCart(newcart);
                                            setCartRefreshed(!cartRefreshed);
                                           
                                        }

                                        }>-</button>
                                    <h1 className="text-xl font-bold">{item.quantity}</h1>
                                    <button className="text-2xl w-[30px] h-[30px] bg-black text-white rounded-full flex justify-center items-center cursor-pointer mx-[5px]"
                                        onClick={() => {
                                           const newcart = cart
                                             newcart[index].quantity += 1;
                                            setCart(newcart);
                                            setCartRefreshed(!cartRefreshed);
                                            
                                        }}>+</button>

                                </div>
                                <div className="h-full w-[100px] flex  justify-center items-center">
                                    <h1 className="text-xl  w-full text-end pr-2"> {(item.price * item.quantity).toFixed(2)}</h1>
                                </div>
                            </div>

                        )
                    }
                    )
                }
                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px] text-xl text-end pr-2 ">Total</h1>
                    <h1 className="w-[100px] text-xl text-end pr-2 ">{getTotalForLabledPrice().toFixed(2)}</h1>
                </div>
                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px] text-xl text-end pr-2 ">Discount</h1>
                    <h1 className="w-[100px] text-xl border-b-[2px] text-end pr-2 ">{(getTotalForLabledPrice() - getTotal()).toFixed(2)}</h1>
                </div>

                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px] text-xl text-end pr-2 ">Net total</h1>
                    <h1 className="w-[100px] text-xl border-b-[4px] border-double text-end pr-2 ">{getTotal().toFixed(2)}</h1>
                </div>
                <div className="w-full  flex justify-end">
                    <button className=" w-[170px] bg-pink-400 text-xl text-center shadow pr-2  text-white h-[40px] px-4 py-2 rounded-lg mt-4 cursor-pointer" onClick={() => {
                        navigate("/checkout",
                            {
                                state: {
                                    items: cart,
                                }
                            }
                        );
                    }}>  Checkout</button>
                </div>



            </div>
        </div>
    );
}