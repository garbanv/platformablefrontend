import React, { useState,useContext } from "react"
import "../components/layout.css"
import { Link,navigate } from "gatsby"
import Loader from "../components/Loader"
import axios from 'axios';
import UserContext from '../context/UserContext'
import SEO from '../components/seo'
import LoginSignErrorMessage from "../components/LoginSignErrorMessage";

export default function Login({data,location}) {
 
  const [user,setUser]= useContext(UserContext);
  const [errorMsg,setErrorMsg]=useState(false)

  // To know if is coming from a post or a page that require login
  let comingFromPreviousUrl=''
  if(typeof window !== "undefined") {
        comingFromPreviousUrl = location.state.previousPost;
    } 

  const [login, setLogin] = useState({
    identifier: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true) // Request API.
    if(login.identifier==="" || login.password===""){
      setErrorMsg(true)
      setLoading(false)
      return null
    }
    axios
    .post('https://websiteserver-ds7cf.ondigitalocean.app/auth/local', {...login})
    .then(response => {
      // Handle success.
      if (typeof window !== `undefined`) {
        // code that references a browser global
        
        localStorage.setItem("isLoggedIn",true)
        // setUser({...user,
        //   name:response.data.user.name,
        //   isLoggedIn:true,
        //   email:response.data.user.email,
        //   membership:'free'})

          setUser(prevState => {
            return {
            ...prevState,
            username:response.data.user.username,
            lastname:response.data.user.lastname,
            name:response.data.user.name,
          isLoggedIn:true,
          email:response.data.user.email,
          membership:'free',
          userId:response.data.user.id
          }
          })
  
          isActiveMember(response.data.user.email)
        
      }

    })
    .catch(error => {
      // Handle error.
      setLoading(false)
      setErrorMsg(true)

      console.log('An error occurred:', error.response);
    });
  }

  // CHECK IF CONNECTED USER IS A PAID MEMBER
  const isActiveMember = (costumerEmail)=> {
    const existingUser =  data.allStripeSubscription.nodes.find(element => element.customer.email === costumerEmail);

      if(existingUser) {
      //  setUser({...user,membership:'paid',
      //  isLoggedIn:true,
      //  stripeId:existingUser.customer.id,
      //  isStripeActive:true,
      //  stripeStartDay:existingUser.current_period_start,
      //  stripeEndDay:existingUser.current_period_end
      // } 
      // ) 
      setUser(prevState => {
        return {
        ...prevState,
        stripeId:existingUser.customer.id,
        isStripeActive:true,
        stripeStartDay:existingUser.current_period_start,
        stripeEndDay:existingUser.current_period_end,
        membership:'paid'
      }
      })
      setTimeout(()=>{
        localStorage.setItem("user",user)
        return comingFromPreviousUrl ? navigate(-1) : navigate("/app/dashboard");
      },1500)
      
      
      }else {
        setTimeout(()=>{
          localStorage.setItem("user",user)
          return comingFromPreviousUrl ? navigate(-1) : navigate("/app/dashboard");
        },1500)
     }
  
  } 



  return (
    <>
    <SEO title="Login"/>
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
          {errorMsg ? <LoginSignErrorMessage message="Username or Password are incorrect"/> : null }
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
    </>
  )
}


export const blogQuery = graphql`
query clientMemberInfo {
  allStripeSubscription {
    nodes {
      customer {
        email
        id
      }
      current_period_end
      current_period_start
    }
  }
}
`