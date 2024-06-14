import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { toast } from "react-toastify";

const ItemCount = ({ producto}) => {

    const [cantidad, setCantidad] = useState(1);
    const {addToCart} = useContext(CartContext)

    const aumentar = () => {
        setCantidad(cantidadAnterior => cantidadAnterior + 1);
    }

    const disminuir = () => {
        if(cantidad > 1) {
            setCantidad(cantidadAnterior => cantidadAnterior -1);
        }
    }
//Agregando los productos al cart dependiendo la cantidad
    const agregar = () => {
        const productoComprado = {
            id: producto.id,
            imagen: producto.image,
            nombre: producto.title,
            precio: producto.price,
            cantidad: cantidad,
            stock: producto.stock
        };
        addToCart(productoComprado);

        // resetea la cantidad a 1 después de agregar.
        setCantidad(1); 


        //Notificacion de producto agregado
        toast.success('Producto agregado al carrito! 🛒', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    return (
    <>
    <div className="flex justify-center space-x-4 mb-5">
        <button onClick={disminuir} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            -
        </button>
        <p className="mt-2">{cantidad}</p>
        <button onClick={aumentar} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        +
        </button>
    </div>
    <div className="flex justify-center space-x-10 mt-10 mb-5">
    <button onClick={agregar} className="inline-block bg-gray-400 hover:bg-red-500 rounded-full px-4 py-3 text-sm font-bold text-gray-700 mr-2 mb-5">Agregar</button>

    <Link to="/cart">
        <button className="inline-block bg-gray-400 hover:bg-cyan-500 rounded-full px-4 py-3 text-sm font-bold  text-gray-700 mr-2 mb-5">Ir al carrito
        </button>
    </Link>
    </div>
    
    </>
    
)
}

export default ItemCount