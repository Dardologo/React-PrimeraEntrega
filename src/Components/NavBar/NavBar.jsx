import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <div>

  
    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid className='navbar' >
      <Navbar.Brand to="/"> <Logo/> </Navbar.Brand>
      <Nav className="me-auto ">
        <Link to="/">HOME</Link>
        <Link to="/accesorios" >ACCESORIOS</Link>
        <Link to="/futbol" >FUTBOL</Link>
        <Link to="/basquet" >BASQUET</Link>
        <Link to="/cart" > <CartWidget/> </Link>


      </Nav>
    </Container>
  </Navbar>
  </div>
  )
 
}

export default NavBar;