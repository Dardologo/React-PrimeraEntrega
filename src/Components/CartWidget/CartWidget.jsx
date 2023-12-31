import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
 const {cart} = useContext( CartContext );
  return (
    <div>
        <button><IoCartOutline /><span>{cart.length}</span></button>
        
    </div>
  )
}

export default CartWidget