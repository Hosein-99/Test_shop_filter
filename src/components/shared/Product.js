import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from 'react-router-dom';

//Functions
import { shorten } from '../helpers/functions';

const Product = ({productData}) => {
    return (
        <div className="col-1 col-sm-3 w-100 cart_main mb-5">
            <LazyLoadImage src={productData.image} alt={productData.title}  width={200}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                    <button>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product; 