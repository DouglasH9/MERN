import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../Components/AuthorForm";
import AuthorsList from "../Components/AuthorsList";

export default (props) => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);
    // const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, [update])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    const createAuthor = (author) => {
        axios.post("http://localhost:8000/api/create", author)
            .then(res => {
                setAuthors([...authors, res.data]);
                setUpdate(!update);
                if(res.data.err){
                    console.log(res.data.err)
                }
            })
            // .catch(err => {
            //     const errorResponse = err.response.data.errors;
            //     const errArr = [];
            //     for (const key of Object.keys(errorResponse)){
            //         errArr.push(errorResponse[key].message)
            //     }
            //     setErrors(errArr);
            //     console.log(errArr)
            // })
    }



    return (
        <>
            <div>
                <h2>Welcome to the Favorite Author DataBase!</h2>
                <AuthorForm  onSubmitProp={createAuthor} initialFirstName="" initialLastName=""/>
            </div>
            <hr/>
            {loaded && <AuthorsList authors={authors} update={update} removeFromDom={removeFromDom}/>}
        </>
    )
}
