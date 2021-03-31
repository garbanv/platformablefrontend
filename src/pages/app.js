import React, {useContext} from "react"
import { Router } from "@reach/router"

import UserContext from '../context/UserContext'


import Dashboard from '../components/clientDashboard'
import PrivateRoute from '../components/PrivateRoute'

import Login from "./login"
import Default from "./index"
import SEO from "../components/seo"

const App = () => {
  const [user,setUser]=useContext(UserContext);

  return (
    <>
    <SEO title="App"/>
      <Router basepath="/app">
      <PrivateRoute path="/dashboard" component={Dashboard} />
        <Login path="/login" />
        <Default path="/" />
      </Router>
    </>
  )
}

export default App