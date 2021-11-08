import React from "react";


const ProductsList = (props) => {

    return (
        <div>
            {props.product.map( (product, i) => 
            <>
                <p key={i}>Title: {product.title}, Price: ${product.price}, Description: {product.description}
                </p>
                <p>
                <a href={"/api/product/" + product._id}>{product.title}</a>
                </p>
            </>
            )}
        </div>
    )
}

export default ProductsList;