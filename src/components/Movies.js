import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDisplay=movies.map((oneMovie,index)=>{
    return(
      <div key={index} >
        <h1>{oneMovie.title}</h1>
        <p>{oneMovie.time} min</p>
        
          
          <ul>
          {
            oneMovie.genres.map((genre)=>{
              return<li key={genre}>{genre}</li>
            })
          }
          </ul>
        

      </div>
    )
  })
  console.log(movieDisplay)
  return (<div>
    <h1>Movies Page</h1>
    {
      movieDisplay
    }
  </div>)
}

export default Movies;
