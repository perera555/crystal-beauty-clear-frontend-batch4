import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import { ProductsPage } from "./client/productsPage";
import { ProductOverview } from "./client/productOverview";
import CartPage from "./client/cart";
import CheckoutPage from "./client/checkout";


export default function HomePage() {
  return (

     <div className="w-full min-h-screen bg-gradient-to-br from-[color:var(--color-secondary)] via-black/90 to-[color:var(--color-accent)] text-white font-sans overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-20">
        {/* Text Content */}
        <div className="max-w-xl z-10 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover Your <span className="text-[color:var(--color-accent)]">True Glow</span>
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            At <span className="text-[color:var(--color-accent)] font-semibold">Crystal Beauty Clear</span>, 
            we believe beauty begins with confidence. Explore our premium range 
            of skincare and cosmetics designed to make you shine naturally.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="/products"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[color:var(--color-accent)] to-orange-500 font-semibold shadow-lg hover:opacity-90 transition-all"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="px-6 py-3 rounded-full border border-[color:var(--color-accent)] text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)] hover:text-white font-semibold transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative mt-10 md:mt-0 flex justify-center w-full md:w-[50%]">
          <img
            src="/hero-model.png"
            alt="Model representing Crystal Beauty Clear"
            className="w-[380px] md:w-[480px] drop-shadow-[0_8px_30px_rgba(250,129,47,0.4)]"
          />
          <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-[color:var(--color-accent)]/30 to-transparent blur-3xl rounded-full top-0 right-10 -z-10"></div>
        </div>
      </section>

      {/* Brand Highlight Section */}
      <section className="w-full bg-[color:var(--color-primary)] text-[color:var(--color-secondary)] py-20 px-10 md:px-20 rounded-t-[60px] shadow-inner">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-[color:var(--color-accent)]">Crystal Beauty Clear?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-[color:var(--color-secondary)] mb-3">Natural Ingredients</h3>
              <p className="text-gray-700">
                Our products are made with gentle, eco-friendly ingredients to nourish your skin naturally.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-[color:var(--color-secondary)] mb-3">Cruelty-Free</h3>
              <p className="text-gray-700">
                We believe in compassion — all our products are cruelty-free and ethically made.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-2xl font-semibold text-[color:var(--color-secondary)] mb-3">Global Standard</h3>
              <p className="text-gray-700">
                CBC follows the highest beauty standards to ensure premium quality across all collections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section className="w-full py-10 text-center bg-[color:var(--color-primary)]">
       
         <div className="w-full h-screen ">
            <Header />
            <div className="w-full h-[calc(100vh-70px)] min-h-[calc(100vh-70px)] ">
                <Routes path="/*">
                    <Route path="/*" element={<homePage/>} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/overview/:id" element={< ProductOverview />} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/checkout" element={<CheckoutPage/>} />
                    <Route path="/*" element={<h1>404 Not found</h1>} />
                </Routes>

            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--color-secondary)] py-8 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Crystal Beauty Clear — All Rights Reserved
      </footer>
    </div>


     
        



  
    );
}

    
