import React from "react"
import './src/styles/global.css';
import './src/pages/landings/training/styles/index.css'


import { UserContextProvider } from "./src/context/UserContext"

export const wrapRootElement = ({ element }) => (
  <UserContextProvider>{element}</UserContextProvider>
)