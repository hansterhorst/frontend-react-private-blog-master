import React from 'react'
import {NavLink} from "react-router-dom";


export default function Login({isAuthenticated, toggleIsAuthenticated}) {

   // handle login or logout
   function handleOnClick() {
      toggleIsAuthenticated()
   }

   return (
      <div className="login">
         <h1>Login Page</h1>
         {isAuthenticated === true ?
            <p>U bent ingelogd om <NavLink to={"/blogPosts"}>Blogposts</NavLink> te lezen.</p>
            :
            <p>U moet moet <strong>Inloggen</strong> om verhalen te lezen.</p>}

         <button type="button" onClick={handleOnClick}>
            {isAuthenticated === false ? "Inloggen" : "Uitloggen"}
         </button>
      </div>
   )
}