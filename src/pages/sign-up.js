import React,{useState} from "react"
import Layout from "../components/layout"
import "../components/layout.css"
import Loader from '../components/Loader'
import {Link} from 'gatsby'

export default function SignUp() {
  const [login, setLogin] = useState({
      identifier:'',
      password:''
  })

  const [loading,setLoading] = useState(false)

  const handleSignUp = () => {
   setLoading(true)    // Request API.
// axios
// .post('http://localhost:1337/auth/local', {...login})
// .then(response => {
//   // Handle success.
//   console.log('Well done!');
//   console.log('User profile', response.data.user);
//   console.log('User token', response.data.jwt);
// })
// .catch(error => {
//   // Handle error.
//   console.log('An error occurred:', error.response);
// });
  }

  return (
    <div className="container mx-auto ">
      <div className="grid md:grid-cols-6 md:gap-4 grid-cols-1 md:gap-2 px-5 justify-center items-center h-screen  ">
        <div className="col-start-3 col-span-2 bg-gray-100 rounded-xl  px-10 py-10">
          <img
            src="https://platformable.com/content/images/2020/02/logo-and-business-name-horizontal.png"
            className="my-5"
          />

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="name"
              type="text"
              placeholder="name"
              onChange={(e)=>setLogin({...login,identifier:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="lastname"
            >
              Lastname
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="lastname"
              type="text"
              placeholder="lastname"
              onChange={(e)=>setLogin({...login,identifier:e.target.value})}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e)=>setLogin({...login,identifier:e.target.value})}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"

            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e)=>setLogin({...login,password:e.target.value})}
            />
            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-russian-violet-dark text-white  hover:russian-violet-light font-bold py-2 px-4 rounded"
              type="button"
              onClick={handleSignUp}
            >

             {loading ? <Loader text="Sign Up"/>  : "Sign Up"} 
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
              to="/login"
            >
              Already have an account?
            </Link>

           
          </div>
        </div>
      </div>
    </div>
  )
}
