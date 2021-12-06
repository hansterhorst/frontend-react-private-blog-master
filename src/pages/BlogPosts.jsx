import React from 'react'
import {NavLink} from "react-router-dom";


export default function BlogPosts({isAuthenticated, posts}) {
   return (
      // logged in, render list with posts
      isAuthenticated === true ? (
            <>
               <h1>Blogposts Overzicht</h1>
               <h2>Aantal Blogposts: {posts.length}</h2>
               {/* sorted on date */}
               {posts.sort((a, b) => new Date(b.date) - new Date(a.date)).map(post => (
                  <p><NavLink to={`blogposts/${post.id}`}>{post.title}</NavLink></p>
               ))}
            </>
         ) :
         // logged out, render nothing
         (<></>)
   )
}