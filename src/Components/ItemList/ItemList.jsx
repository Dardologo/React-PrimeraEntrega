import React from 'react'
import Item from '../Item/Item'

const ItemList = ({producto} ) => {
  return (
    <div className='row card-espacio'>
        {producto.map(producto => 
        <div className='col-md-3' key= {producto.id} >
            <Item producto={producto}/>
        </div>  
            
        )}
    </div>
  )
}

export default ItemList