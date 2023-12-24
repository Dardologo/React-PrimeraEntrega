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
      <Navbar.Brand>
        <Nav.Link as={Link} to='/'> <Logo/> </Nav.Link>
      </Navbar.Brand>
      <Nav className="me-auto espacio-navbar">
        <Nav.Link as={Link} to="/">HOME</Nav.Link>
        <Nav.Link as={Link} to="/category/accesorios" >ACCESORIOS</Nav.Link>
        <Nav.Link as={Link} to="/category/futbol" >FUTBOL</Nav.Link>
        <Nav.Link as={Link} to="/category/basquet" >BASQUET</Nav.Link>
        <Nav.Link as={Link} to="/category/cart" > <CartWidget/> </Nav.Link>


      </Nav>
    </Container>
  </Navbar>
  </div>
  )
 
}

export default NavBar;