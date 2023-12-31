import React from 'react'
import Card from 'react-bootstrap/Card';
import CounterContainer from '../Counter/CounterContainer';
 

const ItemDetail = ({produc}) => {
  return (
    <div key={produc.id}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={produc.imagen} />
        <Card.Body>
            <Card.Title>{produc.titulo}</Card.Title>
            <Card.Title>${produc.precio}</Card.Title>
            <Card.Title> Aca va a ir la descripcion. Tengo que agregarle a cada objeto del json un atributo nuevo</Card.Title>
        </Card.Body>
        <CounterContainer stock={5} initial={0}/>
  
    </Card>
</div>
  )
}

export default ItemDetail