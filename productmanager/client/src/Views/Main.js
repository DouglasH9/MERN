import axios from "axios";
import React, {useEffect, useState} from "react";
import ProductForm from "../Components/ProductForm";
import ProductsList from "../Components/ProductsList";

export default (props) => {
    
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [update, setUpdate] = useState(false);
    const [errors, setErrors] = useState([]);

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
                if(res.data.err) {
                    console.log(res.data.err)
                }
                
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                console.log(errorArr);
            })
            
    }

    return (
        <>
            <div>
                <ProductForm errors={errors} onSubmitProp={createProduct} initialTitle="" initialPrice={0} initialDescription=""/>
            </div>
            <hr/>
            {loaded && <ProductsList products={products} update={update} removeFromDom={removeFromDom}/>}
        </>

    )
}