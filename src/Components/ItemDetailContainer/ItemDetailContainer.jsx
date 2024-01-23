import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import productosArray from '../Json/productos.json';
import ItemDetail from '../ItemDetail/ItemDetail';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  const {addToCart, getQuantityById} = useContext(CartContext)

  let totalQuantity = getQuantityById(id)
  console.log(totalQuantity);

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

    let item = {
      ...producto,
      quantity: cantidad,
    };
    addToCart (item)

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });
   
  }
  return (
   
      <div >
        {producto && <ItemDetail produc={producto} onAdd= {onAdd} initial={totalQuantity}/> }
          
      </div>
    
  )
}

export default ItemDetailContainer