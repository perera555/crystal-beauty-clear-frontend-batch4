import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Testing from "./pages/admin/testing";

import HomePage from "./pages/homePage";
import RegisterPage from "./pages/client/register";

function App() {


  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/testing" element={<Testing />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route path="/*" element={<HomePage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App
