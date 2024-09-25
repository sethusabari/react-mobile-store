import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route, Routes,Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import './Navbar.css';

function NavScrollExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand ><b>Mobile Store</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to='home'>Home</Link></Nav.Link>
            <Nav.Link><Link to='about'>About</Link></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              <Link to='product'>Product</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
        <Route path='home'element={<Home/>}> </Route>
        <Route path='about'element={<About/>}> </Route>
        <Route path='product'element={<Product/>}> </Route>
    </Routes>
    </>
  );
}

export default NavScrollExample;