import React, { useState } from 'react';
import Logo from "../../assets/navBarLogo.jpeg";
import ButtonComponent from '../StoreView/ButtonComponent';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-25 h-25 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <Link to="/">
            <button>
              <img className="rounded-full size-28 my-2" src={Logo} alt="Logo" />
            </button>
          </Link>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between gap-5">
              <ButtonComponent category= "palos" estiloBoton="bg-zinc-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
              <ButtonComponent category= "fundas" estiloBoton="bg-zinc-400 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
              <ButtonComponent category= "botines" estiloBoton="bg-zinc-400 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded border-2 border-gray-500 hover:border-black-700 buttons" />
            </ul>
          </div>
          <div className="order-2 md:order-3">
            <CartWidget/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

