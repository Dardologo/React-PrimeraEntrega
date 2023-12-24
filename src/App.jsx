
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRouter from './router/AppRouter'
function App() {


  return (
    
      <div  >
        <BrowserRouter>
        <NavBar />
        <AppRouter/>
        </BrowserRouter>
      </div>
    
  )
}

export default App
