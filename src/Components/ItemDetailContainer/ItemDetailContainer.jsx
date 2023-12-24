import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productosArray from '../Json/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
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
  }, [id])
  return (
    <div > 
      <div >
        {producto && <ItemDetail produc={producto}/> }
          
      </div>
    </div>
  )
}

export default ItemDetailContainer