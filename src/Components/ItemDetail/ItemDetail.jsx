import React from 'react'
import Card from 'react-bootstrap/Card';
import CounterContainer from '../Counter/CounterContainer';
import { Button } from 'react-bootstrap';
 

const ItemDetail = ({produc, onAdd}) => {
  return (
    <div key={produc.id}>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={produc.imagen} />
        <Card.Body>
            <Card.Title>{produc.titulo}</Card.Title>
            <Card.Title>${produc.precio}</Card.Title>
            <Card.Title>-{produc.descripcion}</Card.Title>
        </Card.Body>
        <CounterContainer stock={produc.stock} initial={0} onAdd={onAdd}/>
        
    </Card>
</div>
  )
}

export default ItemDetail