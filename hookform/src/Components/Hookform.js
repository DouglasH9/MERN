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
    

    const formMessage = () => {
        if ( hasBeenSubmitted ) {
            return `Thank you for submitting the form!`;
        } else {
            return "Welcome! Please submit your info."
        }
    }

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
        if(e.target.value.length < 8){
            setPassError("Passwords be at least 8 characters.");
        } else {
            setPassError("");
        }
    }

    const passConValid = (e) => {
        setPassCon(e.target.value);
        if(passCon !== password){
            setPassConError("Passwords must match!");
        } else {
            setPassConError("");
        }
    }
    return(
        <>
            <form onSubmit={createUser}>
                {
                    hasBeenSubmitted && !nameError ? 
                    <h2>Thank you for submitting the form!</h2>:
                    <h2>Welcome, please submit the form.</h2>
                }
            <div>
                <label>First Name: </label>
                <input type="text" onChange={fNameValid} />
                {
                    nameError ? 
                    <p>{nameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={lNameValid} />
                {
                    nameError ? 
                    <p>{nameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={emailValid} />
                {
                    emailError ? 
                    <p>{emailError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={passwordValid} />
                {
                    passError ? 
                    <p>{passError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={passConValid} />
                {
                    passConError ?
                    <p>{setPassConError}</p> :
                    ""
                }
            </div>
            <div>
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