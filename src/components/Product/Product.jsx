import React from 'react';
import './Product.css'
const Product = (props) => {
  const { img, name, ratings, price, seller, quantity } = props.product
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <h6 className='product-name'>{name}</h6>
        <p>Price:$ {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} start</p>
        </div>
<button className='btn-cart'>Add to cart</button>
    </div>
  );
};

export default Product;