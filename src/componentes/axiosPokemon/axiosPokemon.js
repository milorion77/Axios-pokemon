import React, { useState, useEffect } from "react";
import axios from 'axios';

const AxiosPokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [clicks, setClicks] = useState(0)



    useEffect(() => {
        if (clicks === 0) {
            return
        }
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
            .then(response => setPokemon(response.data.results))
    }, [clicks]
    )

    const hizoClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <div>
            <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokemon" />
            <h1>Lista pokemon</h1>
            <button onClick={hizoClick} className="btn btn-success">Axios Pokemon</button>
            {
                pokemon.map((pokemon, numero) => {
                    return (
                        <div className="container">
                            {numero}. {pokemon.name}
                        </div>)
                })
            }
        </div>

    )
}


export default AxiosPokemon;