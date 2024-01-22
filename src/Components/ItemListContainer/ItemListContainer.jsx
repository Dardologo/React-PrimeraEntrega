import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProductos from '../Json/productos.json';
import ItemList from './ItemList';
import ClipLoader from "react-spinners/ClipLoader";
import { BeatLoader } from 'react-spinners';


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

  if(productos.length === 0){
    return <div>
            <h2>Cargando...</h2>
            <BeatLoader size = {40} color= "red"/>
            </div>
            }
    

  return (
    <div >
      
      <div className='Caards'>
        
        <ItemList productos = {productos}/> 
      </div>
    </div>
  )
}

export default ItemListContainer