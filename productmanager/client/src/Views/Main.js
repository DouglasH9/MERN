import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductForm from "../Components/ProductForm";
import ProductsList from "../Components/ProductsList";

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=> {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[]);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId))
    }

    return (
        <>
            <div>
                <ProductForm/>
            </div>
            <hr/>
            {loaded && <ProductsList product={product} removeFromDom={removeFromDom}/> }
        </>

    )
}

export default Main;