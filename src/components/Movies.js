import React from "react";
import Movie from "./Movie";



export default function Movies ({movies = []}){


    return(
        <div className="movies">
            {movies.length ?  movies.map((mov)=>{
            return <Movie  key={mov.imdbID} movie = {mov}/>
        }) : <h3>Nothing found</h3>}
        </div>
      
    )


}

