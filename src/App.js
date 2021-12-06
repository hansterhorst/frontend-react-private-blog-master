import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import Login from "./pages/Login";
import BlogPosts from "./pages/BlogPosts";
import BlogPost from "./pages/BlogPost";
import TopNavbar from "./components/TopNavbar";
import Home from "./pages/Home";
import {Redirect} from "react-router";
import PageNotFound from "./pages/PageNotFound";
import posts from "./data/posts.json"

function App() {
   // We houden in de state bij of iemand is "ingelogd" (simpele versie)
   const [isAuthenticated, toggleIsAuthenticated] = useState(false);

   // handle login or logout
   function handleIsAuthenticated() {
      toggleIsAuthenticated(!isAuthenticated)
   }

   return (
      <Router>
         <TopNavbar isAuthenticated={isAuthenticated}/>
         <div className="container">
            <Switch>
               <Route exact path={"/"}>
                  <Home isAuthenticated={isAuthenticated} posts={posts}/>
               </Route>
               <Route exact path={"/blogposts"}>
                  {isAuthenticated === false ? <Redirect to={"/login"}/> :
                     <BlogPosts isAuthenticated={isAuthenticated} posts={posts}/>}
               </Route>
               <Route exact path={"/blogposts/:blogId"}>
                  {isAuthenticated === false ? <Redirect to={"/login"}/> :
                     <BlogPost isAuthenticated={isAuthenticated} posts={posts}/>}
               </Route>
               <Route path={"/login"}>
                  <Login isAuthenticated={isAuthenticated}
                         toggleIsAuthenticated={handleIsAuthenticated}/>
               </Route>
               <Route>
                  <PageNotFound/>
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
