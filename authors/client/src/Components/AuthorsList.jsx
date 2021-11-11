import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";

const AuthorsList = (props) => {

    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
    }, [props.update])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return(
        <div>
            {authors.map( (author, i) =>
            <div key={i}>
                <Link to={"/api/author/" + author._id}>
                    {author.lastName}, {author.firstName}
                </Link>
                |
                <Link to={"/api/author/" +author._id + "/edit"}>
                    Edit
                </Link>
                <DeleteButton authorId={author._id} successCallBack={() => removeFromDom(author._id)}/>
            </div>
            )}
        </div>
    )
}

export default AuthorsList;