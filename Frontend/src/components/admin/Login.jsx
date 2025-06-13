import React, { useState } from "react";
import { FiMail, FiLock, FiLogIn } from "react-icons/fi";
import {useAppContext} from '../../context/AppContext';
import toast from "react-hot-toast";

const Login = () => {
  
  const {axios, setToken} = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post('/api/admin/login',{email,password});
      if(data.success){
        setToken(data.token)
        localStorage.setItem('token',data.token);
        axios.defaults.headers.common['Authorization'] = data.token;
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 mx-4 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <div className="w-full text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              <span className="text-primary">Admin</span> Login
            </h1>
            <p className="text-gray-500 mt-6">
              Enter your credentials to access the Admin panel
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg shadow-md transition duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
              <FiLogIn />
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;