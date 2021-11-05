import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

const StarPeople = (props) => {

    const [data, setData] = useState({});
    const [homeWorld, setHomeWorld] = useState("");
    const [homeWorldData, setHomeWorldData] = useState({});
    const {id} = useParams();

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
            .then(res => {
                console.log(res);
                setData(res.data);
                setHomeWorld(res.data.homeworld)
                // var homeURL = res.data.homeworld;
            })
            .catch( err => {
                console.log(err);
                setData({error: "These are not the droids you're looking for"})
            })
    },[id]);

    console.log(homeWorld)
    
    useEffect( () => {
        axios.get(homeWorld)
            .then(res => {
                console.log(res);
                setHomeWorldData(res.data);
            })
            .catch( err => {
                console.log(err);
                setHomeWorldData({error: "These are not the droids you're looking for"})
            })
        },[id, homeWorld]);

    return (
        
        data.error ?
        <h1>{data.error} <img src="https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=980109eb0886d17c4d64441868bc4885" alt="Obi Wan Kenobi" /></h1> :
        <div>
            <h1>Star Person: {data.name}</h1>
            <p>
                Height: {data.height}
            </p>
            <p>
                Gender: {data.gender}
            </p>
            <p>
                Mass: {data.mass}kgs
            </p>
            <p>
                Hair Color: {data.hair_color}
            </p>
            <p>
                Birthday: {data.birth_year} 
            </p>
            <p>
                Eye Color: {data.eye_color}
            </p>
            <p>
                Home World: {data.homeworld}
            </p>
            <p>
                Home World: {homeWorldData.name}
            </p>
        </div>
        
    )
}

export default StarPeople;