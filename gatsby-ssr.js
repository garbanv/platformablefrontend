import React from "react"
import './src/styles/global.css';


import { UserContextProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)

// const addScript = url => {
//   const script = document.createElement("script")
//   script.src = url
//   script.async = true
//   document.body.appendChild(script)
// }

// export const onClientEntry = () => {
//   window.onload = () => {
//     addScript("https://cdn.jsdelivr.net/npm/chart.js@3.1.1/dist/chart.min.js")
//   }
// }