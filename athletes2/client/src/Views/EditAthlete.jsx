import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import DeleteButton from "../Components/DeleteButton";
import AthleteForm from "../Components/Form";
import axios from "axios";
import { useHistory, Redirect } from "react-router";


const EditAthlete = (props) => {

    const history = useHistory();
    const {id} = useParams();
    const [athlete, setAthlete] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    useEffect( () => {
        axios.get("http://localhost:8000/api/athletes/" + id)
            .then(res => {
                setAthlete(res.data);
                setLoaded(true);
            })
    },[id]);

    const updateAthleteHandler = (athlete) => {
        axios.put("http://localhost:8000/api/athletes/" + id)
            .then(res => console.log(res))
            .then(res => setIsEdited(true)
            )
            .catch(err => console.log(err))
    }

    return isEdited ? 
    <Redirect to="/"/> :
    (
        
        <div>
            {loaded && (
            <>
                <h1>Edit Athlete: {athlete.fName} {athlete.lName}</h1>
                <AthleteForm
                        onSubmitProp={updateAthleteHandler}
                        initialFName={athlete.fName}
                        initialLName={athlete.lName}
                        initialSport={athlete.sport}
                        initialTeam={athlete.team}
                        submitButtonName="Update Athlete"
                    />
                <DeleteButton athleteId={athlete._id} successCallBack={()=> history.push("/")}/>
            </>
                )}
        </div>
    )
}

export default EditAthlete;