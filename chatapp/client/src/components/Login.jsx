import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = (props) => {

    const {name} = props;
    const [name, setName] = useState("")
    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const user = {name};
        onSubmitProp({name});
        localStorage.setItem(user);
        history.push("/chat");


    }

    return(
        <div className="loginBox">
            <form onSubmit={submitHandler}>
                <label>Name: </label>
                <input type="text" onChange={(e)=> {setName(e.target.value)}} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Login;