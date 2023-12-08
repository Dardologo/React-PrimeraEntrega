import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../Json/productos.json';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(productos.find(producto => producto.id === parseInt(id)))
      }, 2000)
    });
    promesa.then ((data)=> {
      setProducto(data);
    })
  }, [id])
  return (
    <div className='container'> 
      <div className='row'>
          <ItemDetail producto={producto}/> 
      </div>
    </div>
  )
}

export default ItemDetailContainer