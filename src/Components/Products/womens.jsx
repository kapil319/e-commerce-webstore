import React, { useEffect, useState } from 'react';
// import { CartPage } from "../../contexts/Cart/Cart.jsx";
import { useCart } from "../../contexts/CartContext.jsx";
import './Item.css';

function WomenProducts() {
    const [womensproducts, setWomensproducts] = useState([]);
    const { cart, addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
            .then((res) => res.json())
            .then((data) => setWomensproducts(data));
    }, []);

    return (
        <div className="products-container">
            <h2 className="product-category-title">Women's Clothing Products</h2>
            <div className="product-list">
                {womensproducts.map((product) => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">Price: £{product.price}</p>
                        <p className="product-description">{product.description}</p>
                        <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WomenProducts;
