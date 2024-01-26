"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./profile.module.css";

export default function Profile(){
    const [pokemon, setPokemon] = useState("./vercel.svg")
    const [nombre, setNombre] = useState("")
    const [id, setId] = useState(0)
    const url = "https://pokeapi.co/api/v2/pokemon/150"
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setPokemon(data.sprites.front_default),
            setNombre(data.species.name),
            setId(data.id)
        })
    },[]
    )

    return(
        <div className={style.container}>
            <h1>My Pokemon</h1>
            <div className={style.sprites}>
                <h1>{nombre}</h1>
                <Image src={pokemon} width={250} height={250}></Image>
                <h2>#{id}</h2>
            </div>
        </div>
    )
}