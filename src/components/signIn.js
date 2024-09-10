import React, { useState } from "react"
import logo from "../assets/logo.png"
import NavBar from "./Navbar"
import postData, { mutationAPI } from "../apiWrapper/apiwrapper"
import config from "../apiWrapper/config"

export default function SignIn() {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleRegister=async(e)=>{
    e?.preventDefault()
    const payload={
      "email":email,
      "password":password,
      }
     
      try {
        const response = await mutationAPI("/v1/auth/signup", "POST", payload);

        window.location.href = "/login";
      } catch (error) {
        console.error('Login Error:', error.response ? error.response.data : error.message);
      }
    
  }
    return (
      <>
        <NavBar/>
        <div >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-4 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-10 w-auto"
            /> */}
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-4">
            <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 align-left text-left align-left">
                  first Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 align-left text-left align-left">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div >
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 align-left text-left align-left">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                  onChange={(e)=>setEmail(e?.target?.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                                    onChange={(e)=>setPassword(e?.target?.value)}

                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                 onClick={handleRegister}
                  style={{background:"#E80A2B",color:"white",width:"100%",height:"50px",borderRadius:"10px"}}
                >
                  Register
                </button>
              </div>

            </form>
  
          
          </div>
        </div></div>
      </>
    )
  }
  