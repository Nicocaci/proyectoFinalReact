import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Recupera el carrito de localStorage al cargar la aplicación
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        // Guarda el carrito en localStorage cada vez que cambia
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //Agrega los productos al carrito
    const addToCart = (producto) => {
        setCart(prevCart => {
            let productExists = false;
            const updatedCart = prevCart.map(item => {
                if (item.id === producto.id) {
                    productExists = true;
                    return { ...item, cantidad: item.cantidad + producto.cantidad };
                }
                return item;
            });
            //Si el producto existe, sigue sumando productos, si no, lo agrega.
            if (!productExists) {
                updatedCart.push(producto);
            }
            return updatedCart;
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

