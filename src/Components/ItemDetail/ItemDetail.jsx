import React from 'react'
import Card from 'react-bootstrap/Card';
 

const ItemDetail = ({producto}) => {
  return (
    <div key={producto.id}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
            <Card.Title>{producto.titulo}</Card.Title>
            <Card.Title>${producto.precio}</Card.Title>
        </Card.Body>
    </Card>
</div>
  )
}

export default ItemDetail