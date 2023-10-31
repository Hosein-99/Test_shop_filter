import React , { useEffect, useState , useContext } from 'react';

//context
import { ApiContext } from '../context/ContextApi';

//components
import Product from './shared/Product';

const Store = () => {

    

    const products = useContext(ApiContext);
    

    const [productCards , setproductCards] =  useState([]);

    useEffect(()=>{
        setproductCards([...products.sort((a , b) => {return a.price - b.price})]);   
    } , [])

    function sortProductsByPrice(e) {
        e.stopPropagation();
        
        if (e.target.value === 'LowToHigh'){
            setproductCards([...products.sort((a , b) => {return a.price - b.price})]);    
        }
        if (e.target.value === 'HighToLow'){
            setproductCards([...products.sort((a , b) => {return b.price - a.price})]);    
        }
    }
    
    

    return (
        <div className='container mt-5'>

            <div className='mb-5'>
                <span style={{color : "white"}}>
                    Price : &nbsp;
                </span>
                <select data-bs-theme="light" name='price' id='test-price' onChange={(e) => {sortProductsByPrice(e)}}>
                    <option value="">Please Choose Your Sort For Price</option>
                    <option value="LowToHigh">Low To High</option>
                    <option value="HighToLow">High To Low</option>
                </select>
            </div>            
            <div className='row justify-content-between'>
            {
                products.map(product => <Product key={product.id} productData={product} />)
            }
           </div>
        </div>
    );
};

export default Store;