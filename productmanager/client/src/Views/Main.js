import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductForm from "../Components/ProductForm";
import ProductsList from "../Components/ProductsList";

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=> {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    },[update]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    const createProduct = (product) => {
        axios.post("http://localhost:8000/api/product/create", product)
            .then(res=>{
                setProducts([...products, res.data]);
                setUpdate(!update);
            })
    }

    return (
        <>
            <div>
                <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDescription=""/>
            </div>
            <hr/>
            {loaded && <ProductsList products={products} update={update} removeFromDom={removeFromDom}/> }
        </>

    )
}