import React, {useState} from "react";
import axios from "axios";

const ShowPokemon = (props) => {

    const [pokemon, setPokemon] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const setClickState = () => {
        setIsClicked(true);
    }

    if(isClicked === true){
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(res => {setPokemon(res.data.results)})
            .catch(err => {console.log(err)});
            console.log("get request sent");
        }
    

    return(
        <>
            <button onClick={setClickState}>Wanna Catch 'em All?</button>
            <ul>
                {pokemon.map((pokemon, i) => {
                    return <li key={i}>{pokemon.name}</li>
                })}
            </ul>
        </>
    )
}

export default ShowPokemon;