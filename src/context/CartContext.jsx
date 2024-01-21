import { createContext, useState } from "react"


export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState([]);

  const addToCart = (product)=>{
   let exist= isInCart(product.id)
   if(exist){
     let newArr = cart.map( (elemento)=>{
      if(elemento.id === product.id){
        return {...elemento, quantity:product.quantity}
      }else {
        return elemento
      }
     })
     setCart (newArr)
   } else{
    setCart( [ ...cart, product ] )
   }
   
  }

  const isInCart = (id)=>{
    let exist =cart.some(elemento=> elemento.id=== id)
    return exist
  }

  const getQuantityById = (id) =>{
    let product = cart.find((elemento)=>elemento.id===id)
    return product?.quantity;
  }

  //Limpiar el carrito

  const clearCart = () => {
    setCart ([])
  }
  //Obtener el total del carrito

  //Borrar un elemento particular del carrito

  //Obtener la cantidad de elementos

    const data = {
        cart: cart,
        addToCart: addToCart,
        getQuantityById: getQuantityById,
        clearCart: clearCart

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent