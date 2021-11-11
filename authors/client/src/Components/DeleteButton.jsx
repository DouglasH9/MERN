import React from "react";
import axios from "axios";

export default (props) => {

    const {authorId, successCallBack} = props;

    const deleteAuthor = (e) => {
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then(res => {
                successCallBack();
            })
    }

    return (
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}