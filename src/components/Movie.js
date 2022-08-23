import React from "react";



export default function Movie({ movie }){

    const { Title, Year, imdbID, Type, Poster } = movie

   
        return(
            < div key={imdbID}>
             <div class="card-image waves-effect waves-block waves-light">
                     <img class="activator" src={Poster}/>
              </div>
              <div class="card-content">
                      <span class="card-title activator grey-text text-darken-4">{Title}</span>
                         <p>{Year}<span>{Type}</span> </p>
             </div>
            </div>
    
        )
    }

