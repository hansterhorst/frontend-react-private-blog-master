import React from 'react'
import {NavLink} from "react-router-dom";


export default function Home({isAuthenticated, posts}) {

   return (
      <div className="container">
         <h1>Home Page</h1>
         <h2>Welkom op mijn eigen Blogsite.</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias
            aliquid architecto consequuntur culpa debitis doloribus eligendi est exercitationem
            expedita fuga hic in itaque magni, modi mollitia natus numquam pariatur placeat possimus
            quidem rerum sapiente ullam vel velit vitae? Ab aspernatur eius, exercitationem facilis
            impedit ipsum neque odio optio quas quasi saepe, voluptatum? Amet aspernatur autem culpa
            eius eveniet excepturi molestiae ratione tenetur vitae voluptatem! Aspernatur
            consequuntur delectus dolorum eius, eos, ipsa itaque laborum laudantium molestiae
            officia perferendis, quibusdam rerum veniam voluptas voluptatum. At consectetur cum
            deleniti eum fugit magnam maiores molestiae nisi officia quisquam? Asperiores numquam
            sunt vero.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque autem beatae cumque
            doloremque eligendi error, itaque omnis perspiciatis possimus provident ratione sit
            totam vel voluptatibus! A accusantium asperiores at atque aut blanditiis deserunt
            dignissimos distinctio dolor dolore doloribus est et eum libero maiores molestias nisi
            nostrum, odio porro possimus provident quia quisquam ratione reprehenderit repudiandae
            sint sunt suscipit totam unde voluptatem! A adipisci cupiditate dolorem laudantium minus
            placeat sequi! Alias animi aspernatur eligendi eos excepturi expedita fugiat in labore
            laudantium maiores minima nihil, nobis optio, perspiciatis quaerat quasi qui quo
            repellat sapiente sequi sint totam ut voluptas voluptatibus voluptatum.</p>

         {isAuthenticated === true ?
            <>
               <h2>Laatste 3 posts:</h2>
               {posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3).map(post => (
                  <>
                     <NavLink to={`blogposts/${post.id}`}>{post.title}</NavLink>
                     <p className="date">{new Date(post.date).toLocaleDateString('nl-NL', {
                        day: "numeric",
                        weekday: "short",
                        month: "short",
                        year: "numeric"
                     })}</p>
                  </>
               ))}
            </>
            :
            <></>
         }
      </div>
   )
}