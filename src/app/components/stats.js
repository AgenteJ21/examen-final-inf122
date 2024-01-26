"use client"
import style from './stats.module.css';
import { useState, useEffect } from 'react';

export default function About(){
    const [hp, setHp] = useState(null)
    const [attack, setAttack] = useState(null)
    const [defense, setDefense] = useState(null)
    const [speed, setSpeed] = useState(null)
    
    const url = "https://pokeapi.co/api/v2/pokemon/150"

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setHp(data.stats[0].base_stat),
            setAttack(data.stats[1].base_stat),
            setDefense(data.stats[2].base_stat),
            setSpeed(data.stats[5].base_stat)
        })
    },[]
    )
    return(
        <div className={style.container}>
            <h2>Stats</h2>
            <div className={style.line}></div>
            <br></br>
            <div className={style.descripton}>
                <p>HP</p>
                <h2>{hp}</h2>
                <br />
                <p>Attack</p>
                <h2>{attack}</h2>
                <br />
                <p>Defense</p>
                <h2>{defense}</h2>
                <br />
                <p>Speed</p>
                <h2>{speed}</h2>
            </div>
            
        </div>
    )
}