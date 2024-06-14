import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../cart/CartContext';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.length;

  return (
    <>
      <Link to="/cart">
        <button className="flex items-center bg-gray-700 text-white px-4 py-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293-.511a1 1 0 01-.24-1.961L7 10m0 3h10a1 1 0 100-2H7a1 1 0 100 2zm0 5a2 2 0 104 0 2 2 0 00-4 0zm10 0a2 2 0 104 0 2 2 0 00-4 0z" />
          </svg>
          <span>{totalItems}</span>
        </button>
      </Link>
    </>
  );
}

export default CartWidget;
