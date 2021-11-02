import React, {useState} from "react";

const HookForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passCon, setPassCon] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [newUser, setNewUser] = useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [passConError, setPassConError] = useState("");



    const createUser = (e) => {
        if (fName.length > 2 && lName.length > 2 && password === passCon){
            e.preventDefault();
            setNewUser = {fName, lName, email, password, passCon};
            console.log("new user added");
            setHasBeenSubmitted(true);
        }
        
    };
    
    const fNameValid = (e) => {
        setFName(e.target.value);
        if(e.target.value.length < 1){
            setNameError("Please enter a name.");
        } else if (e.target.value.length < 2) {
            setNameError("Names must be at least 2 characters.");
        } else {
            setNameError("");
        }
    }

    const lNameValid = (e) => {
        setLName(e.target.value);
        if(e.target.value.length < 1){
            setNameError("Please enter a name.");
        } else if (e.target.value.length < 2) {
            setNameError("Names must be at least 2 characters.");
        } else {
            setNameError("");
        }
    }
    const emailValid = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Please enter an email.")
        }
        else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long.");
        } else {
            setEmailError("")
        }
    }

    const passwordValid = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0){
            setPassError("Passwords be at least 8 characters.");
        } else {
            setPassError("");
        }
    }

    const passConValid = (e) => {
        setPassCon(e.target.value);
        if(passCon !== password && e.target.value.length > 0){
            setPassConError("Passwords must match!");
        } else {
            setPassConError("");
        }
    }
    return(
        <>
            <form className="form-group" onSubmit={createUser}>
                {
                    hasBeenSubmitted && !nameError ? 
                    <h2>Thank you for submitting the form!</h2>:
                    <h2>Welcome, please submit the form.</h2>
                }
            <div className="form-control">
                <label>First Name: </label>
                <input type="text" onChange={fNameValid} />
                {
                    nameError ? 
                    <p className="text-danger">{nameError}</p> :
                    ""
                }
            </div>
            <div className="form-control">
                <label>Last Name: </label>
                <input type="text" onChange={lNameValid} />
                {
                    nameError ? 
                    <p className="text-danger">{nameError}</p> :
                    ""
                }
            </div>
            <div className="form-control">
                <label>Email: </label>
                <input type="text" onChange={emailValid} />
                {
                    emailError ? 
                    <p className="text-danger">{emailError}</p> :
                    ""
                }
            </div>
            <div className="form-control">
                <label>Password: </label>
                <input type="text" onChange={passwordValid} />
                {
                    passError ? 
                    <p className="text-danger">{passError}</p> :
                    ""
                }
            </div>
            <div className="form-control">
                <label>Confirm Password: </label>
                <input type="text" onChange={passConValid} />
                {
                    passConError ?
                    <p className="text-danger">{passConError}</p> :
                    ""
                }
            </div>
            <div className="form-control btn btn-primary">
                <label>Submit: </label>
                <input type="submit"/>
            </div>
        </form>
        
        <p>First Name: {fName}</p>
        <p>Last Name: {lName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm: {passCon}</p>
        </>
    )
}

export default HookForm;