

import React from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice'
import logo from '../assets/logo2.webp';

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isAuthenticated, user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    navigate({ to: '/auth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-gray-300 shadow-md py-4 px-6 flex justify-between items-center">

      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-bold text-indigo-800">shrinkX</span>
      </div>

      {/* Right: Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <Link
          to="/"
          className=" bold-text-gray-900 hover:text-blue-600 transition duration-200"
        >
          Home
        </Link>

        {!isAuthenticated ? (
          <Link
            to="/auth"
            className="bg-indigo-700 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition"
          >
            Login
          </Link>
        ) : (
          <>
            <span className="text-gray-600 text-sm">Hi, {user?.name || 'User'}</span>
            <button
              onClick={handleLogout}
              className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar


