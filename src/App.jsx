
import './App.css'
import CartWidget from './Components/CartWidget/CartWidget'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Error from './Components/NavBar/Error'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    
      <div  >
        <BrowserRouter>
        <NavBar />
       
        <Routes>
        <Route path={'/'} element ={ <ItemListContainer/>}/>
        <Route path={'/categoria/:id'} element={<ItemListContainer/>}/>  
        <Route path={'/item/:id'} element={<ItemListContainer/>}/>  
        <Route path={'/cart'} element= {<CartWidget/> } /> 
        <Route path={'*'} element={<Error/>}/>  


        </Routes>
       
        </BrowserRouter>
      </div>
    
  )
}

export default App
