import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton";
import axios from "axios"
import { Paper } from "@material-ui/core";

const Main = (props) =>{

    const [athletes, setAthletes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/athletes")
        .then((res) => {
            setAthletes(res.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err)
        })
    },[update])

    const removeFromDom = (athleteId) => {
        setAthletes(athletes.filter(athlete => athlete._id !== athleteId))
        setUpdate(!update);
    }

    return(
        <div className="mainContainer">
            <h1>Welcome to the athletes main page!</h1>
            <Link to="/create">Add Athlete</Link>
            {loaded &&
            <Paper elevation={9} >
                <ul className="mainList">
                    {athletes.map((athlete, i) => {
                        return(
                                <li className="athList" key={i}><Link to={"/view/" + athlete._id}>{athlete.fName} {athlete.lName}</Link> | <Link to={"/edit/" + athlete._id}>Edit</Link> | <DeleteButton variant="contained" color="error" athleteId={athlete._id} successCallBack={removeFromDom}/></li>
                            )
                        })}
                </ul>
            </Paper>
            }
        </div>
    )
}

export default Main;