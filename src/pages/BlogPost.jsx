import React from 'react'
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";


export default function BlogPost({isAuthenticated, posts}) {

   // get the id from the request param
   const {blogId} = useParams()

   // find post by id
   const post = posts.find((post) => post.id === blogId)

   return (
      <div className="container">
         {/* logged in, render post */}
         {isAuthenticated === true ? (
               <>
                  <h1>BlogPost Page</h1>
                  <h3>{post.title}</h3>
                  <p className="date">{new Date(post.date).toLocaleDateString('nl-NL', {
                     day: "numeric",
                     weekday: "long",
                     month: "short",
                     year: "numeric"
                  })}</p>
                  <p>{post.content}</p>
                  <NavLink to="/blogposts">Terug</NavLink>
               </>
            ) :
            // logged out, render nothing
            (<></>)}
      </div>
   )
}