import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Planets = (props) => {

    const [data, setData] = useState({});
    
    const {id} = useParams();
    

    useEffect( () => {
        axios.get(`https://swapi.dev/api/planets/${id}?format=json`)
            .then(res => {
                console.log(res);
                setData(res.data);
            })
            .catch( err => {
                console.log(err);
                setData({error: `These are not the droids you're looking for` })
            })
    },[id])

    return (
        data.error ?
        <h1>{data.error} <img src="https://i.guim.co.uk/img/media/0a8b5ca4cd61e5a422106dd0340fd8e152b33f4d/116_317_1362_816/master/1362.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=980109eb0886d17c4d64441868bc4885" alt="Obi Wan Kenobi" /></h1> :
        <div>
            <h1>Planet: {data.name}</h1>
            <p>
                Climate: {data.climate}
            </p>
            <p>
                Diameter: {data.diameter}
            </p>
            <p>
                Population: {data.population}
            </p>
            <p>
                Orbital Period: {data.orbital_period}
            </p>
            <p>
                Gravity: {data.gravity}
            </p>
            <p>
                Terrain: {data.terrain}
            </p>
        
        </div>
    )
}

export default Planets;