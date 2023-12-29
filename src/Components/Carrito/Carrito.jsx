import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Carrito = () => {
    return (
        <div>
            <h1>Estoy en el carrito</h1>
            <Link to="/checkout">
                <Button variant="success" > Finalizar compra</Button>
            </Link>
        </div>
    )
}

export default Carrito