import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductsPage } from "./client/productsPage";


export default function HomePage() {
    return (
        <div className="w-full h-screen ">
            <Header />
            <div className="w-full min-h-[calc(100vh-70px)] ">
                <Routes path="/*">
                    <Route path="/" element={<h1>Home Page</h1>}/>
                    <Route path="/products" element={<ProductsPage/>} />
                    <Route path="/*" element={<h1>404 Not found</h1>} />
                </Routes>

            </div>

        </div>
    )
}