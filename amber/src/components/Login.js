import React, { useState, useEffect } from 'react';
import { login } from '../features/auth/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { loginUserAction } from '../features/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, user, error  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  //useEffect(() => {
  //  if (user) {
  //    navigate('/');
  //  }
  //}, [navigate, user]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUserAction({ email, password }));
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-orange-500 min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-center flex-grow text-white">
        <h1 className="text-4xl font-bold mb-8">Login to Amber-alert PRO</h1>

        <div className="w-full max-w-md bg-white bg-opacity-20 p-8 rounded-lg shadow-md">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded bg-white bg-opacity-20 text-white focus:outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded hover:bg-white hover:text-orange-500 transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="flex justify-center space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-full flex items-center">
              <FaFacebook className="mr-2" />
              Login with Facebook
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-full flex items-center">
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg">Don't have an account?</p>
            <Link to="/signup" className="text-blue-300 hover:underline font-semibold">
              Create one for free!
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 w-full py-6 text-center text-white">
        <p>© 2024 Amber-alert PRO. All rights reserved.</p>
        <p>Contact us at: info@amberalertpro.com</p>
      </footer>
    </div>
  );
};

export default Login;
