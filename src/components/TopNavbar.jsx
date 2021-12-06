import {Link, NavLink} from "react-router-dom";

export default function TopNavbar({isAuthenticated}) {

   console.log(isAuthenticated === true ? "Logout" : "Inloggen")

   return (
      <nav>
         <div className="container navbar">
            <NavLink to={"/"}><h2>TravelStories</h2></NavLink>
            <div className="nav-links">
               <NavLink className="nav-link" exact to={"/"}
                        activeClassName="is-active">Home</NavLink>
               <NavLink className="nav-link" to={"/blogposts"}
                        activeClassName="is-active">Blogposts</NavLink>
               <NavLink className="nav-link" to={"/login"} activeClassName="is-active">
                  {isAuthenticated === false ? "Login" : "Uitloggen"}</NavLink>
               <Link/>
            </div>
         </div>
      </nav>
   )
}