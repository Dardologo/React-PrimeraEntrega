
import './App.css'
import CartWidget from './Components/CartWidget/CartWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Accesorios from './Components/NavBar/Accesorios'
import Basquet from './Components/NavBar/Basquet'
import Error from './Components/NavBar/Error'
import Futbol from './Components/NavBar/Futbol'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    
      <div  >
        <BrowserRouter>
        <NavBar />
       
        <Routes>
        <Route path={'/'} element ={ <ItemListContainer greeting='Bienvenidos a Beccaritas Sports 😊 ' />}/>
        <Route path={'/category/:id'} element={<ItemListContainer/>}/>  
        <Route path={'/item/:id'} element={<ItemListContainer/>}/>  
        <Route path={'category/:id'} element={<ItemListContainer/>}/>  
        <Route path={'/cart'} element= {<CartWidget/> } /> 
        <Route path={'*'} element={<Error/>}/>  


        </Routes>
       
        </BrowserRouter>
      </div>
    
  )
}

export default App
