import React,{useEffect, useState} from "react";
import {Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";
import axios from "axios";


const ProductsList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data))
    },[props.update])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            {products.map( (product, i) => 
            <div key={i}>
                <Link to={"/api/product/" + product._id}>
                    {product.title}
                </Link>
                |
                <Link to={"/api/product/" + product._id + "/edit"}>
                    Edit
                </Link>
                <DeleteButton buttonName="Delete" productId={product._id} successCallBack={() => removeFromDom(product._id)}/>
            </div>
            )}
        </div>
    );
}

export default ProductsList;