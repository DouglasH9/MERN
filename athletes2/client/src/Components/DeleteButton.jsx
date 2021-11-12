import React from "react";
import axios from "axios";


const DeleteButton = (props) => {

    const {athleteId, successCallBack} = props;

    const deleteHandler = (e) => {
        e.preventDefault();
        axios.delete("http://localhost:8000/api/athletes/" + athleteId)
            .then(res => {
                console.log(res);
                successCallBack();
            })
            .catch(err=> console.log(err))
    }

    return(
        <button onClick={deleteHandler}>Delete</button>
    )
}

export default DeleteButton;