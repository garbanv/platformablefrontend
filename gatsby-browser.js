import React from "react"
import './src/styles/global.css';


import { UserStateProvider } from "./src/context/UserStateContext"

export const wrapRootElement = ({ element }) => (
  <UserStateProvider>{element}</UserStateProvider>
)