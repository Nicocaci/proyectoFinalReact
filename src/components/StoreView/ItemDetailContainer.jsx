import React from 'react'
import { Link } from 'react-router-dom'
const ItemDetailContainer = ({title, price, description, image, id}) => {

  return (
    <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden h-64">
              <div className="w-1/3 bg-cover">
              <img className="w-full h-full object-cover" src={image} alt="Imagen del producto" />
            </div>
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
                  <p className="mt-2 text-gray-600 text-sm">{description}</p>
                <div className="flex items-center mt-2">
                </div>
                <div className="flex items-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">Precio: {price}</h1>
                  <Link to={`/item/${id}`}> 
                    <button className="px-2 py-3 bg-cyan-600 text-black text-xs font-bold uppercase rounded">Ver detalles</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
  )
  
}

export default ItemDetailContainer