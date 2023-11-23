import React from "react";
import { movies } from "../data";

function Movies() {

 const moviesData= movies.map((movie, index) => {
 const genres = movie.genres;
     console.log(genres)

  return(
 
    <div key={index}>
      <h3>Title: {movie.title}</h3>
      <p>Time: {movie.time}</p>
          <ul>
              <li key={index}>{movie.genre}</li>
          
          </ul>
    </div>
      
  )   
 })
  return <div>
  <h1>Movies Page</h1>
 
     {moviesData}
        

  </div>
  
  
}

export default Movies;
