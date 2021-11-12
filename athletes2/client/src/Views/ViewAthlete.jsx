import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton";
import axios from "axios";


const ViewAthlete = (props) => {

    const {id} = useParams();
    const [athlete, setAthlete] = useState({});
    const history = useHistory();

    useEffect( () => {
        axios.get("http://localhost:8000/api/athletes/" + id)
            .then(res => {
                setAthlete(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return(
        <div>
            <h1>Page for athlete: {athlete.fName} {athlete.lName}</h1>
            <h3>{athlete.sport}</h3>
            <h3>{athlete.team}</h3>
            <Link to={"/edit/" + id} >Edit | </Link>
            <DeleteButton athleteId={id} successCallBack={() => history.push("/")}/>
        </div>
    )
}

export default ViewAthlete;