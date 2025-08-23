import { useState, useEffect } from 'react';
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart')
            return storedCart ? JSON.parse(storedCart) : []
        }
        catch (error) {
            console.error("Failed to load data from localStorage : ", error)
            return []
        }
    })
    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart))
        } catch (error) {
            console.error("Failed to save cart to localStorage: ", error);
        }
    }, [cart])


    return (
        <CartContext.Provider value={{ cart, setCart, countCart: cart.length }}>
            {children}
        </CartContext.Provider>
    );
};

