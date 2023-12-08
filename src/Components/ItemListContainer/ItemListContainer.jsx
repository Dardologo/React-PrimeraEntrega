import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productos from '../Json/productos.json';
import ItemList from '../itemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(id ? productos.filter(item => item.categoria.id === id) : productos);
          }, 2000);
        });
        setProducto(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };
    fetchData();
  }, [id])

  return (
    <div className='greeting container'>
      <div className='row'>
        <h2>{greeting}</h2>
        <ItemList producto = {producto}/> 
      </div>
    </div>
  )
}

export default ItemListContainer