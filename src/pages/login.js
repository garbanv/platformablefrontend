import React, { useState,useContext } from "react"
import "../components/layout.css"
import { Link,navigate } from "gatsby"
import Loader from "../components/Loader"
import axios from 'axios';
import {UserStateContext} from '../context/UserStateContext'

export default function Login() {
  const [login, setLogin] = useState({
    identifier: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const [userState,setUserState]=useContext(UserStateContext)

  const handleLogin = () => {
    setLoading(true) // Request API.
    axios
    .post('https://websiteserver-ds7cf.ondigitalocean.app/auth/local', {...login})
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      if (typeof window !== `undefined`) {
        // code that references a browser global
        localStorage.setItem("user",response.data.user.username)
        localStorage.setItem("jwt",response.data.jwt)
          setUserState({...userState,name:response.data.user.name})
        navigate("/dashboard")
      
      }

    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  }

  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
        <div className="col-start-3 col-span-2 bg-gray-50 rounded-xl  px-10 py-10">
          <img
            src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png"
            className="my-10"
          />

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              onChange={e => setLogin({ ...login, identifier: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              onChange={e => setLogin({ ...login, password: e.target.value })}
            />
            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleLogin}
            >
              {loading ? <Loader text="Sign In" /> : "Sign In"}
            </button>

            <Link
              to="/sign-up"
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              href="#"
            >
              Create Account
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to="/" className="text-center text-sm my-5">
              www.platformable.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
