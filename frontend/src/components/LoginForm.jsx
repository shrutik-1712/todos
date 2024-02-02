import React from 'react'
import { useNavigate } from 'react-router-dom';
import AuthStore from '../../stores/authStore'

export default function LoginForm() {
    const store=AuthStore();
    const Navigate=useNavigate();
    const handleLogin=async (e)=>{
      e.preventDefault();
      await store.login()

      Navigate("/")
    }
  return (
    <>
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
          </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form  className="space-y-6" onSubmit={handleLogin}>
    
      <div>  
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
     <div><input value={store.loginForm.email} onChange={store.UpdateLoginForm} type="email" name="email" required
     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
     /></div>
     </div>
     <div> 
      <div className="flex items-center justify-between"></div>
      <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
       <div class="mt-2">
        <input value={store.loginForm.password} onChange={store.UpdateLoginForm} type="password" name="password" required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
        <div>
        <button  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type='submit'>login</button>
        </div>
      </div>
      </form>
      </div>
      </div>
    </>
  )
}
