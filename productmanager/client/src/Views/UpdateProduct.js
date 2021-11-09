import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";


const UpdateProduct = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    useEffect( () => {
        console.log(id);
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    },[id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/" + id + "/edit", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </div>
                <div>
                    <input type="submit" value="Update Product"/>
                </div>
            </form>
        </>
    )
}

export default UpdateProduct;