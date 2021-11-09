import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const ProductsList = (props) => {

    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete("http://localhost:8000/api/product/" +productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {props.product.map( (product, i) => 
            <div key={i}>
                <p>Title: {product.title}, Price: ${product.price}, Description: {product.description}
                </p>
                <p>
                <a href={"/api/product/" + product._id}>{product.title}</a> | <button onClick= {(e) =>{deleteProduct(product._id)}}>Delete</button>
                </p>
            </div>
            )}
        </div>
    )
}

export default ProductsList;