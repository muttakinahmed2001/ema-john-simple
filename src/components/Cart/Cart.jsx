import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // const cart =props.cart
    // // const {cart}=props
    console.log(cart)
    let totalPrice =0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice =totalPrice+product.price;
        totalShipping=totalShipping+product.shipping
    }
    const tax = totalPrice*7/100

    const grandTotal = totalPrice +totalShipping+tax;
    
    return (
        <div className='cart'>
             <h2>Order summary</h2>
                <p>Selected items:{cart.length}</p>
                <p>Total Price:${totalPrice}</p>
                <p>Total Shipping Charge:{ totalShipping}</p>
                <p>Tax:{tax.toFixed(2)}</p>
                <h3>Grand Total:{grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;