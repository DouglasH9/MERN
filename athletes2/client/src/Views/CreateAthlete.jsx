import axios from "axios";
import React, {useState} from "react";
import AthleteForm from "../Components/Form";
import { Redirect } from "react-router";

const CreateAthlete = (props) => {

    const [isAdded, setIsAdded] = useState(false);
    const [errors, setErrors] = useState([]);

    const createHandler = ((athlete) => {
        axios.post("http://localhost:8000/api/athletes/", athlete)
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
            setIsAdded(true);
            console.log(errArr);
        })
    })
    

    return isAdded && !errors ?
    <Redirect to="/"/> :
    (
        <div>
            <h1>Create an athlete!</h1>
            <AthleteForm errors={errors} onSubmitProp={createHandler} initialFName="" initialLName="" initialSport="" initialTeam=""/>
        </div>
    )
}

export default CreateAthlete;