import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton";
import axios from "axios"

const Main = (props) =>{

    const [athletes, setAthletes] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/athletes")
        .then((res) => {
            setAthletes(res.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err)
        })
    },[athletes])

    const removeFromDom = (athleteId) => {
        setAthletes(athletes.filter(athlete => athlete._id !== athleteId))
    }

    return(
        <div>
            <h1>Welcome to the athletes main page!</h1>
            <Link to="/create">Add Athlete</Link>
            {loaded &&
                <ul>
                    {athletes.map((athlete, i) => {
                        return(
                                <li key={i}><Link to={"/view/" + athlete._id}>{athlete.fName} {athlete.lName}</Link> | <Link to={"/edit/" + athlete._id}>Edit</Link> | <DeleteButton variant="contained" color="error" athleteId={athlete._id} successCallBack={removeFromDom}/></li>
                            )
                        })}
                </ul>
            }
        </div>
    )
}

export default Main;