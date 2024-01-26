"use client"
import style from './about.module.css';
import { useState, useEffect } from 'react';

export default function About(){
    const [type, setType] = useState([])
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [ability1, setAbility1] = useState("")
    const [ability2, setAbility2] = useState("")
    
    const url = "https://pokeapi.co/api/v2/pokemon/150"

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setType(data.types[0].type.name),
            setHeight(data.height),
            setWeight(data.weight),
            setAbility1(data.abilities[0].ability.name),
            setAbility2(data.abilities[1].ability.name)
        })
    },[]
    )
    return(
        <div className={style.container}>
            <h2>About</h2>
            <div className={style.line}></div>
            <br></br>
            <div className={style.descripton}>
                <p>Type</p>
                <h2>{type}</h2>
                <br />
                <p>Height</p>
                <h2>{height}</h2>
                <br />
                <p>Weight</p>
                <h2>{weight}</h2>
                <br />
                <p>Abilities</p>
                <h2>{ability1}, {ability2}</h2>
            </div>
            
        </div>
    )
}