import React from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import { ThreeDots } from 'react-loader-spinner';

const ItemDetail = () => {

const [productos, setProduct] = useState({});
const [loading, setLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    getProducts().then((products) => {
      const product = products.find((product) => product.id === id);
      setProduct(product);
      setLoading(false);
    });
  }, [id]);

return (
    <>
    {loading ? (
            <div className="flex justify-center items-center h-screen">
            <ThreeDots
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
        </div>

        ) : (

    <section className="flex justify-center items-center mt-[50px] h-screen" >
        <div className='mb-50 bg-white max-w-md mx-auto'>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full h-auto object-cover" src={productos.image} alt="imagen de la card"/>
    <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-black">{productos.title}</div>
        <p className="text-black text-base">
        {productos.description}
    </p>
    </div>
        <div className="px-6 pt-4 pb-5">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-5">Precio: {productos.price}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-5">Categoria: {productos.category}</span>
            {/* El contador de los objetos para agregar de 1 a mas. */}
            {productos && <ItemCount producto={productos} />}
        </div>
    </div>
        </div>
    </section>
  )}
    </>
    )
}

export default ItemDetail
