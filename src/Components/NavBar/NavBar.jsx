import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget'
import Logo from '../Logo/Logo';
function NavBar() {
  return (
    <div>

  
    <Navbar bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#home"> <Logo/> </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">HOME</Nav.Link>
        <Nav.Link href="#features">DEPORTES</Nav.Link>
        <Nav.Link href="#pricing">ACCESORIOS</Nav.Link>
        <Nav.Link href="#pricing">OFERTAS</Nav.Link>
        <Nav.Link href="#pricing">OUTLET</Nav.Link>
        <Nav.Link href="#pricing">NOSOTROS</Nav.Link>
        <Nav.Link href="#pricing">CONTACTO</Nav.Link>
        <Nav.Link href="#pricing"> <CartWidget/> </Nav.Link>


      </Nav>
    </Container>
  </Navbar>
  </div>
  )
 
}

export default NavBar;