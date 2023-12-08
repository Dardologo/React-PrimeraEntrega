import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({producto}) => {
  return (
    <Link to= {'/item/ ' + producto.id} className='text-decoration-none'>
    <div className='container'>
        <div className='card border border-0'>
            <img src={producto.imagen} className='card-img-top' alt={producto.titulo} />
            <div className='card-body text-center'>
              <p children='card-text'> {producto.categoria.nombre}</p>  
            </div>
        </div>

    </div>
    </Link>
  )
}

export default Item