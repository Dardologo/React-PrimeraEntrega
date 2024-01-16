import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productosArray from '../Json/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(productosArray.find(p => p.id === id))
      }, 1000)
    });
    promesa.then ((data)=> {
      setProducto(data);
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [id])

  const onAdd = ( cantidad ) =>{
    console.log("Se agrego al carrito", producto)
    console.log(cantidad)

    let obj = {
      ...producto,
      quantity: cantidad,
    };
    console.log("Este es el producto que se agrega", obj)
  }
  return (
    <div > 
      <div >
        {producto && <ItemDetail produc={producto} onAdd= {onAdd}/> }
          
      </div>
    </div>
  )
}

export default ItemDetailContainer