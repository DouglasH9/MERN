import React, {useEffect,useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import ProductForm from "../Components/ProductForm";
import DeleteButton from "../Components/DeleteButton";
import { useHistory, Redirect } from "react-router";

const UpdateProduct = (props) => {

    const history = useHistory();
    const {id} = useParams();
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [isEdited, setIsEdited] = useState(false);


    useEffect( () => {
        console.log(id);
        axios.get("http://localhost:8000/api/product/" + id)
            .then(res => {
                setProduct(res.data);
                console.log(res.data)
                setLoaded(true);
            })
    },[id]);

    const updateProductHandler = product => {
        axios.put("http://localhost:8000/api/product/" + id, product)
            .then(res => console.log(res))
            .then(res => 
                setIsEdited(true)
            )
            .catch(err => 
                console.log(err))
        }
        
    

    return isEdited ?
    <Redirect to="/api/products"/> :
    (
        <div>
            {loaded && (
            <>
                <ProductForm
                        onSubmitProp={updateProductHandler}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                        submitButtonName="Update"
                        />
                <DeleteButton productId={product._id} successCallBack={() => history.push("/api/products")}/>
            </>
            )}
        </div>
    )
}

export default UpdateProduct;