import { createContext, useState } from "react"


export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState([{id: 1, titulo: "Dardo"},{id: 2, titulo: "Ruben"}]);

  const addToCart = (product)=>{
    console.log(product)
  }

    const data = {
        cart: cart,
        addToCart: addToCart

    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent