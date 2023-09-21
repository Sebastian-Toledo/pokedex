import React, { useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState,useEffect } from "react";

const Main = () => {
    const [getPokeData,setPokeData] = useState([])
    const [loading,setLoading]= useState(true)
    const [getUrl, setUrl]=useState("https://pokeapi.co/api/v2/pokemon/ ")
    const [nextUrl, setNextUrl]= useState()
    const pokeFun= async()=>{
        setLoading(true)
        const res = await axios.get(getUrl)
        console.log(res)
    }
    

    useEffect(()=>{
        pokeFun()
    },[url])
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <div className="btn-group">
                        <button>Previous</button>
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