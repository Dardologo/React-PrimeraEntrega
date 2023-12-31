import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../Json/productos.json';
import ItemList from './ItemList';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
          }, 1000);
        });
        setProductos(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [id])

  return (
    <div >
      
      <div className='Caards'>
        
        <ItemList productos = {productos}/> 
      </div>
    </div>
  )
}

export default ItemListContainer