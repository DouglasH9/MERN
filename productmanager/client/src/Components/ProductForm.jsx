import React, {useState} from "react";
import axios from "axios";
export default () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/create", {
            title,
            price,
            description,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title of Product: </label>
                <input type="text" onChange={(e)=> setTitle(e.target.value)} value={title} />
            </div>
            <div>
                <label>Price: </label>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </div>
            <div>
                <input type="submit" value="Create Product" />
            </div>
        </form>
    )
}