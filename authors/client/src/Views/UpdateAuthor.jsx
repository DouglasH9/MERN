import React, {useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import AuthorForm from "../Components/AuthorForm";
import { Redirect, useHistory} from "react-router";
import DeleteButton from "../Components/DeleteButton";

const UpdateAuthor = (props) => {

    const history = useHistory();
    const {id} = useParams();
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isEdited, setIsEdited] = useState(false);

    useEffect( () => {
        console.log(id);
        axios.get("http://localhost:8000/api/author/" +id)
            .then(res => {
                setAuthor(res.data);
                console.log(res.data)
                setLoaded(true);
            })
    }, [id])

    const updateAuthorHandler = author => {
        axios.put("http://localhost:8000/api/author/" +id + "/edit", author)
            .then(res => console.log(res))
            .then(res => 
                setIsEdited(true)
                )
            .catch(err => 
                console.log(err)
                )
    }

    return isEdited ?
    <Redirect to="/api"/> :
    (
        <div>
            {loaded && (
                <>
                    <AuthorForm
                    onSubmitProp={updateAuthorHandler}
                    initialFirstName={author.firstName}
                    initialLastName={author.lastName}
                    submitButtonName={"Update"}
                    />
                <DeleteButton authorId={author._id} successCallBack={() => history.push("/api")}/>
                </>
            )}
        </div>
    )
}

export default UpdateAuthor;