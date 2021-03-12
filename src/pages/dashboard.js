import React, { useState,useEffect } from 'react'
import Layout from '../components/layout'

export default function Dashboard() {

    const [loggedUser,setLoggedUser] = useState('')
    console.log(window.localStorage.getItem("user"))
    useEffect(()=> {
        setLoggedUser(window.localStorage.getItem("user"))
    })
    console.log(loggedUser.username)

    return (
        <Layout>
            <div className="container mx-auto">

            <h2 className="text-center font-black my-10">Hi {loggedUser?loggedUser:null}! ,Here is going to be the dashboard</h2>
            
            </div>
        </Layout>
    )
}
