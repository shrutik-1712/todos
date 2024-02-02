import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import TodoPage from '../pages/TodoPage'
import SignupPage from '../pages/SignupPage'
import Logout from '../pages/Logout'
import RequiedAuth from "./RequiedAuth"
import AuthStore from '../../stores/authStore'

export default function NavBar() {
  return (
    <>
    <BrowserRouter>
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
    
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
        <Link to="/"><span className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">home</span></Link>
      
      
        <Link to="/LoginPage"><span className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
          
          login
          
          </span></Link>
      
        <Link to="/signup"><span className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
          
          Signup
          
          </span></Link>
     
        <Link to="/Logout"><span className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
          
          logout
          
          </span>
          </Link>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </nav> 
    <Routes>
      <Route index element={<RequiedAuth>
        <TodoPage/>
      </RequiedAuth>}/>
      <Route path="/LoginPage" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/Logout" element={<Logout/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  )
}
