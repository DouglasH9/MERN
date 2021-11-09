import React from "react";
import axios from "axios";

export default (props) => {
    const {productId, successCallBack} = props;

    const deleteProduct = (e) => {
        axios.delete("http://localhost:8000/api/product/" + productId)
            .then(res => {
                successCallBack();
            })
    }

    return (
        <button  onClick={deleteProduct}>
            Delete
        </button>
    )
}