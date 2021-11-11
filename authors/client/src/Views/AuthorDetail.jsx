import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, Redirect, useParams} from "react-router-dom"

const AuthorDetail = (props) => {

    const [author, setAuthor] = useState({});
    const [isDeleted, setIsDeleted] = useState(false);
    const {id} = useParams();

    useEffect( () => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [id])

    const deleteAuthor = () => {
        axios.delete("http://localhost:8000/api/author/" + id)
            .then(res => {
                setIsDeleted(true)
            })
            .catch(err => console.log(err));
    }

    return isDeleted ?
    <Redirect to="/api"/> :
    (
        <div>
            <div>
                First Name: {author.firstName}
            </div>
            <div>
                Last Name: {author.lastName}
            </div>
            <Link to={author._id +"/edit"}>
                Edit
            </Link>
            <button onClick={deleteAuthor}>Delete</button>
        </div>
    )
}

export default AuthorDetail;