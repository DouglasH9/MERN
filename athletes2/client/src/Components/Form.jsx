import React, {useState} from "react";

const AthleteForm = (props) => {

    const {initialFName, initialLName, initialSport, initialTeam, onSubmitProp, submitButtonName, errors} = props;
    const [fName, setFName] = useState(initialFName);
    const [lName, setLName] = useState(initialLName);
    const [sport, setSport] = useState(initialSport);
    const [team, setTeam] = useState(initialTeam);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({fName, lName, sport, team})
        setFName("");
        setLName("");
        setSport("");
        setTeam("");
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name: </label>
                <input type="text" name="fName" onChange={(e) => {setFName(e.target.value)}} value={fName}  />
                {errors[0] ? <p>{errors[0]}</p> : ""}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lName" onChange={(e) => {setLName(e.target.value)}} value={lName} />
                {errors[1] ? <p>{errors[1]}</p> : ""}
            </div>
            <div>
                <label>Sport: </label>
                <input type="text" name="sport" onChange={(e) => {setSport(e.target.value)}} value={sport} />
                {errors[2] ? <p>{errors[2]}</p> : ""}
            </div>
            <div>
                <label>Team: </label>
                <input type="text" name="team" onChange={(e) => {setTeam(e.target.value)}} value={team} />
                {errors[3] ? <p>{errors[3]}</p> : ""}
            </div>
            <div>
                <input type="submit" name="submit" value={submitButtonName} />
            </div>
        </form>
    )
}

export default AthleteForm;