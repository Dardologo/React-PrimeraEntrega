import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {
   const {cart} = useContext( CartContext )

    return (
        <div>
            <h1>Estoy en el carrito</h1>

            {
                cart.map((producto)=>{
                  return  <h4 key={producto.id}>{producto.titulo}</h4>

                })
            }
            <Link to="/checkout">
                <Button variant="success" > Finalizar compra</Button>
            </Link>
        </div>
    )
}

export default Carrito