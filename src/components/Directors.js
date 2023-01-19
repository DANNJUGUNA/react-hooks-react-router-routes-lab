import React from "react";
import { directors } from "../data";

function Directors() {
  const directorDisplay= directors.map((director)=>{
    return(
     <div key={director.name}>
       <h1>{director.name}</h1>
       <ul>
       {
         director.movies.map((movie)=>{
         return (
           <li key={movie}>
             {movie}
           </li>
         )
         })
       }</ul>
     </div>
    )
   })
   console.log(directorDisplay)
  return (
  <div>
    <h1>Directors Page</h1>

    {
     directorDisplay
    }
  </div>
  )
}

export default Directors;
