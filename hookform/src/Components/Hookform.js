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
        </form>
        
        <p>First Name: {this.state.fName}</p>
        <p>Last Name: {this.state.lName}</p>
        <p>Email: {this.state.email}</p>
        <p>Password: {this.state.password}</p>
        <p>Confirm: {this.state.passCon}</p>
        </>
    )
}

export default HookForm;