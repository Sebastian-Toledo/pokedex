import React, { useState } from "react";

const Card = (pokemon,loading)=>{
    console.log(pokemon)
    return( <>
     {
            loading ? <>loading...</>:
            pokemon.map((item)=>{
                return(<>
                    <div className="card">
                    <h2>{pokemon.pokemon.name}</h2>
                    <img src={""} alt="" />
                    <h2>{""}</h2>
                   </div>
                    </>  
                )
            })
          }
    </>                            
    )
}

export default Card