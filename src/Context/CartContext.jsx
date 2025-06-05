import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        try {
            const storedCart = localStorage.getItem('cart')
            return storedCart ? JSON.parse(storedCart) : []
        }
        catch(error) {
            console.error("Failed to load data from localStorage : ",error)
            return []
        }

    })


    useEffect(() => {
        try{
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        catch(error){
            console.error("Failed to save cart item to loaclStorage : ",error)
        }
    }, [cart])



    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the context
export const useCart = () => useContext(CartContext);
