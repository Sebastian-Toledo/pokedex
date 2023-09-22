import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {

    const [loading,setLoading] = useState(true)
    const [url,setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState()
    const [precUrl, setPrevUrl] = useState()
    const [pokeData, setPokeData] = useState([])

    const getAllPokemons = async () =>{
        setLoading(true)
        const res = await axios.get(`${url}?limit=50&offset=0`)
        getPokemon(res.data.results)
        setNextUrl(res.data.next)
        setPrevUrl(res.data.previous)
        setLoading(false)
        console.log(pokeData)     
    }

    const getPokemon = async(res)=>{
        res.map(async(item)=>{
            const result = await axios.get(item.url)
            console.log(result.data)
            setPokeData(result.data)
        })
        
    }

    // const cardPokemon = () =>{
    //     if(!pokeData){
    //         pokeData.map((item) =>{
    //             return   <Card pokemon={item} />
    //         })
    //     }
    //     else
    //         return <h1>holaa</h1>
    // }

    useEffect(()=>{
        getAllPokemons()
    },[])

    return(
        <>
            <div className="container">
                <div className="left-content">

                     <Card pokemon={pokeData} loading={loading}/>
                    <div className="btn-group">
                        <button >Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="rigth-content">
                    <Pokeinfo/> 
                </div>
            </div>
        </>
    )
}

export default Main