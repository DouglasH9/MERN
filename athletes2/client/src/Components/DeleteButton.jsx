import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button"



const DeleteButton = (props) => {

    const {athleteId, successCallBack} = props;
    

    const deleteHandler = (e) => {
        // e.preventDefault();
        axios.delete("http://localhost:8000/api/athletes/" + athleteId)
            .then(res => {
                console.log(res);
                successCallBack();
            })
            .catch(err=> console.log(err))
    }

    return(
        <Button className="coolButton" variant="contained"  color="secondary"  onClick={() => {
            const confirmBox = window.confirm(
                "Are you sure you want to delete this athlete?"
            )
            if (confirmBox === true) {
                deleteHandler()
            }
        }
        }>Delete</Button>
    )
}

export default DeleteButton;