import React from "react"
import './src/styles/global.css';
import './src/pages/landings/trends/styles/index.css'


import { UserContextProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)