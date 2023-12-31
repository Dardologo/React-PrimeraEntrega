
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './router/AppRouter'
import CartContextComponent from './context/CartContext'
function App() {


  return (

    <div  >
      <BrowserRouter>

        <CartContextComponent>

          <NavBar />
          <AppRouter />

        </CartContextComponent>

      </BrowserRouter>
    </div>

  )
}

export default App
