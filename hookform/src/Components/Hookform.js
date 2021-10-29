import React, {useState} from "react";

const HookForm = (props) => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passCon, setPassCon] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {fName, lName, email, password, passCon};
        console.log("new user added");
    };

    return(
        <>
            <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFName(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLName(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setPassCon(e.target.value)} />
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