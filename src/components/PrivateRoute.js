
import React,{useContext,useState,useEffect} from "react"
import { navigate } from "gatsby"
import UserContext from '../context/UserContext'
import { Router } from "@reach/router"

const PrivateRoute = ({ component: Component, location, ...rest }) => {



  const [user,setUser]=useContext(UserContext);
   
  if (!user.isLoggedIn && location.pathname !== `/login`) {
    navigate("/login")
    return null
  }

   return (
    <Component {...rest} />
  )
}

export default PrivateRoute