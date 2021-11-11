import React, { useState } from "react";

export default (props) => {

    const {initialFirstName, initialLastName, onSubmitProp, submitButtonName, errors} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);

    const submitHandler = e => {
        e.preventDefault();
        onSubmitProp({firstName,lastName})
        setFirstName("")
        setLastName("")
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name: </label>
                    <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} value={firstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}} value={lastName} />
                </div>
                <div>
                    <input type="submit" value={submitButtonName} />
                </div>
            </form>
        </>
    )
}

