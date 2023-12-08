import React from 'react'

const ItemDetail = ({producto}) => {
  return (
    <div className='row'>
      <div className='col-md-4 iifset-md-4'>
      <img src={producto.imagen} className='img-fluid' alt={producto.titulo} />
      <h3>{producto.nombre}</h3>
      <p>{producto.categoria.nombre}</p>
      <p>$ {producto.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail