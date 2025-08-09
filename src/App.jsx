import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Testing from "./pages/admin/testing";

import HomePage from "./pages/homePage";
import RegisterPage from "./pages/client/register";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {


  return (
    <GoogleOAuthProvider clientId="32494288967-sm65ubrpk5iq64l6vaugateq0eimhfnu.apps.googleusercontent.com">
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
    </GoogleOAuthProvider>

  );
}

export default App
