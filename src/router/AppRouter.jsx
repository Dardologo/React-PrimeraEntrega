import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'

import CartWidget from '../Components/CartWidget/CartWidget'
import ItemDetailContainer from '../Components/ItemDetailContainer/ItemDetailContainer'

const AppRouter = () => {
  return (
    <Routes>
    
    <Route path={'/'} element ={ <ItemListContainer/>}/>
    <Route path={'/categoria/:id'} element={<ItemListContainer/>}/>  
    <Route path={'/item/:id'} element={<ItemDetailContainer />}/>  
    <Route path={'/cart'} element= {<CartWidget/> } /> 
    <Route path={'*'} element={<Error/>}/>  
    </Routes>
  )
}

export default AppRouter