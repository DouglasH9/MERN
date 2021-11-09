import React, {useState} from "react";

export default (props) => {

    const {initialTitle, initialPrice, initialDescription, onSubmitProp, submitButtonName} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const submitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, description})
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title of Product: </label>
                <input type="text" name="title" onChange={(e)=> {setTitle(e.target.value)}} value={title} />
            </div>
            <div>
                <label>Price: </label>
                <input type="number" onChange={(e) => {setPrice(e.target.value)}} value={price} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => {setDescription(e.target.value)}} value={description}/>
            </div>
            <div>
                <input type="submit" value={submitButtonName} />
            </div>
        </form>
    )
}