import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link, Redirect} from "react-router-dom";

const ProductDetail = (props) => {
    const [product, setProduct] = useState({})
    const [isDeleted, setIsDeleted] = useState(false)
    const {id} = useParams();

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" +id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err));
    }, [id])
    
    const deleteProduct = () => {
        axios.delete("http://localhost:8000/api/product/" + id)
            .then(res => {
                setIsDeleted(true)
            })
            .catch(err => console.log(err));
    }

    return isDeleted ?
    <Redirect to="/api/products"/> :
    (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={product._id +"/edit"}>
                Edit
            </Link>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    )
}

export default ProductDetail;