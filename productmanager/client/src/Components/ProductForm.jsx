import React, {useState} from "react";
// import Main, {errors} from "../Views/Main";

export default (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp, submitButtonName, errors} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        setTitle("")
        setPrice(0)
        setDescription("")
    }

    return(
        <>
        <form onSubmit={submitHandler}>
            <div>
                <label>Title of Product: </label>
                <input type="text" name="title" onChange={(e)=> {setTitle(e.target.value)}} value={title} />
                {errors[0] ? <p>{errors[0]}</p> : ""}
            </div>
            <div>
                <label>Price: </label>
                <input type="number" onChange={(e) => {setPrice(e.target.value)}} value={price} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={description}/>
                {errors[1] ? <p>{errors[1]}</p> : ""}
            </div>
            <div>
                <input type="submit" value={submitButtonName} />
            </div>
        </form>
        </>
        
    )
}