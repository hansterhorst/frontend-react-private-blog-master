import React from "react"
import {NavLink} from "react-router-dom";

export default function PageNotFound() {
   return (
      <>
         <h1>Oeps... Page Not Found</h1>
         <NavLink to={"/"}>Home</NavLink>
      </>
   )
}