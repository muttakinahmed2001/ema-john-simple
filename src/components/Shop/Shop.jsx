import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([])

    useEffect(()=>{
fetch('products.json')
.then(res => res.json())
.then(data =>setProducts(data))
    }, [])
     useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step-1: get id of the addedProduct
        for(const id in storedCart){
            //step-2: get product form products state by using id
            const addedProduct =products.find(product =>product.id===id)
            if(addedProduct){
                // step 3: add quantity
                const quantity = storedCart[id]
                addedProduct.quantity=quantity;

                // step: 4 add the added product to the saved cart
                savedCart.push(addedProduct)
            }
            console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
        
     },[products])

    const handlerAddToCart =(product)=>{
        const newCart =[...cart,product];
        setCart(newCart);
        addToDb(product.id)
     }
     

    return (
        <div className='shop-container'>
          <div className="products-container">
             {products.map(product=> <Product 
             key={product.id} 
             product={product} handlerAddToCart={handlerAddToCart}>
                
             </Product>)} 
            </div>  
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;