import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleRegister() {
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    axios
      .post(import.meta.env.VITE_BACKEND_URL + "/api/user/", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        role: "Customer",
        password: formData.password,
      })
      .then((response) => {
        toast.success("Registration Successful");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Registration Failed", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Registration Failed");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">
      <div className="w-[50%] h-full"></div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-fit p-6 backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Email"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          <input
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="First Name"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          <input
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
           <input
            onChange={handleChange}
            name="role"
            type="text"
            placeholder="Role"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          <input
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="Phone"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          <input
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]"
          />
          <button
            onClick={handleRegister}
            className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer mt-2"
          >
            {loading ? "Registering..." : "Register"}
          </button>
          <p className="text-gray-600 text-center m-[10px]">
            Already have an account?
            &nbsp;
            <span className="text-green-500 cursor-pointer hover:text-green-700">
              <Link to={"/login"}>Login Here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
