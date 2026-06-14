import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bg  from "../assets/images/login.jfif";
const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(formData);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen  py-12">
      <div className="container w-10/12 mx-auto grid lg:grid-cols-2">

     
      <div className="hidden lg:block">
        <img
          src={bg}
          alt=""
          className="w-full h-screen mt-auto object-cover"
        />
      </div>

      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome Back 👋</h2>
          <p className="text-gray-500 mb-6">
            Login to your account
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
            onChange={handleChange}
          />

          <div className="relative mb-4">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full border rounded-lg p-3"
              onChange={handleChange}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-sky-600 font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div> </div>
    </section>
  );
};

export default Login;