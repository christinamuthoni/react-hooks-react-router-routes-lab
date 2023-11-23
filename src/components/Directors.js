import React from "react";
import { directors} from "../data";

function Directors() {
  const directorsData= directors.map((director, index) => {
    return(
    <div key={index}>
      <h3>{director.name}</h3>
      <ul>
        {director.movies.map((movie, movieIndex) => {
          <li key={movieIndex}>{movie}</li>
        })}
      </ul>
    </div>
    )})



  return(
   <div>
     <h1>Directors Page</h1>
     {directorsData}
      
    </div>
  )
}

export default Directors;
