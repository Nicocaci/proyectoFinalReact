import React, { useContext, useEffect } from 'react';
import { CartContext } from '../cart/CartContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);


    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

  
    const subtotal = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    const impuestos = subtotal * 0.05;
    const envio = 5.00; 
    const total = subtotal + impuestos + envio;

    //Funcion en dondew se usa un hook de ReactRouterDom, en donde si no hay productos en el carrito, muestre un error, y si el carrito tiene productos, me envie al checkout
    const navigate = useNavigate();

    const handleCheckout = () => {
        cart.length === 0 
            ? toast.error('No tienes productos en el carrito, compra algo') 
            : navigate('/checkout');
    };

    return (
        <>
        <section>
        <div className="h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Tus objetos!</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Producto</th>
                                        <th className="text-left font-semibold">Precio Unitario</th>
                                        <th className="text-left font-semibold">Precio Cantidad</th>
                                        <th className="text-left font-semibold">Cantidad</th>
                                        <th className="text-left font-semibold"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <td className="py-4">
                                        <div className="flex items-center">
                                            <img className="h-16 w-16 mr-4" src={item.imagen} alt={item.nombre} />
                                            <span className="font-semibold">{item.nombre}</span>
                                        </div>
                                        </td>
                                        <td className="py-4">{item.precio}</td> 
                                        <td className="py-4">{item.precio * item.cantidad}</td> 
                                        <td className="py-4">{item.cantidad}</td>
                                        <td className="py-4">
                                        <button 
                                            onClick={() => handleRemove(item.id)} 
                                            className='bg-white text-white rounded-md py-2 px-4'>
                                            <img className="h-5 w-5 w-16 mr-4" src="https://img.icons8.com/?size=100&id=1941&format=png&color=F90202" />
                                        </button>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>

                                        {/* Aqui generamos el boton de limpiar todo el carrito, cuando haya productos, si no, desaparece.*/}
                            {cart.length > 0 && (
                                <button 
                                    onClick={clearCart} 
                                    className='bg-red-500 text-white rounded-md py-2 px-4 mt-4'>
                                    Vaciar carrito
                                </button>
                            )}
                        </div>
                    </div>

                            {/* Estuve leyendo que en los ecommerce se utiliza el toFixed para representar el dinero en dos decimales.*/}
                    <div className="md:w-1/4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold mb-4">Tu compra</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Impuestos</span>
                        <span>${impuestos.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Envio</span>
                        <span>${envio.toFixed(2)}</span>
                    </div>
                    <hr className="my-2"/>
                    <div className="flex justify-between mb-2">
                        <span className="font-semibold">Total</span>
                        <span className="font-semibold">${total.toFixed(2)}</span>
                        </div>

                        <button onClick={handleCheckout} className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Comprar</button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
    
}
export default Cart;
