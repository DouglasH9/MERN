import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
import DeleteButton from "../Components/DeleteButton";
import AthleteForm from "../Components/Form";
import axios from "axios";
import { useHistory, Redirect } from "react-router";


const EditAthlete = (props) => {

    // const {errors} = props;
    const history = useHistory();
    const {id} = useParams();
    const [athlete, setAthlete] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/athletes/" + id)
            .then(res => {
                setAthlete(res.data);
                setLoaded(true);
            })
    },[id]);

    const updateAthleteHandler = ((athlete) => {
        axios.put("http://localhost:8000/api/athletes/" + id, athlete)
        .then(res=> {
            if(res.data.err) {
                console.log(res.data.err)
            }
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errorResponse)){
                errArr.push(errorResponse[key].message)
            }
            setErrors(errArr);
            setIsEdited(true);
            console.log(errArr);
        })
    })

    return isEdited && !errors ? 
    <Redirect to="/"/> :
    (
        
        <div>
            {loaded && (
            <>
                <h1>Edit Athlete: {athlete.fName} {athlete.lName}</h1>
                <AthleteForm
                        errors={errors}
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