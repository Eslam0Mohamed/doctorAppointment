import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import bg from "../assets/images/Register.jfif"
const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
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

      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      navigate("/auth/login");
    } catch (error) {
      alert(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={bg}
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-6">
            Join our medical platform
          </p>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border rounded-lg p-3 mb-4"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3 mb-4"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 mb-4"
            onChange={handleChange}
          />
          <button
            className="w-full bg-sky-600 text-white py-3 rounded-lg font-semibold"
          >
            {loading ? "Loading..." : "Register"}
          </button>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-sky-600 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;