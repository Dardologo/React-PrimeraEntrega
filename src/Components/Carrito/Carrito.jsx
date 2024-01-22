import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Carrito = () => {
   const {cart, clearCart, deleteProductoById, getTotalPrice} = useContext( CartContext )

   let total = getTotalPrice()

    return (
        <div>
            <h1>Estoy en el carrito</h1>

            {
                cart.map((producto)=>(
                    
                    <div key={producto.id} style={{border: "2px solid black"}}>
                    <h2>{producto.titulo}</h2>
                    <h3>{producto.descripcion}</h3>
                    <h2>${producto.precio}</h2>
                    <h2>cantidad: {producto.quantity}</h2>
                    <Button variant="outline-danger" onClick={() => deleteProductoById(producto.id)}> Eliminar </Button>
                    </div>
                    )
                )
            }

            <h4>El total a pagar es : {total}</h4>
            <Link to="/checkout">
                <Button variant="success" > Finalizar compra</Button>
            </Link>
            <Button variant="outline-danger" onClick={clearCart} > Vaciar Carrito </Button>
        </div>
    )
}

export default Carrito