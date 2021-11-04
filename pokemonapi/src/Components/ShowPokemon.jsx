import React, {useState, useEffect} from "react";
import axios from "axios";

const ShowPokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect( () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=150")
            .then(res => {setPokemon(res.data.results)})
            
            .catch(err => {console.log(err)});
    },[]);
    

    return(
        <>
            
            <ul>
                {pokemon.map((pokemon, i) => {
                    return <li key={i}>{pokemon.name}</li>
                })}
            </ul>
        </>
    )
}

export default ShowPokemon;