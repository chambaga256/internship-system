import 'bootstrap/dist/css/bootstrap.min.css'
import "./Header.css"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem ,Container,Button} from 'react-bootstrap';
import {NavLink,Link} from"react-router-dom";
function Header() {
    return (
        <div className="Container">
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="/">welcome To Stractcom</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <NavLink className="me-auto">
      <NavLink to="/home" >Features</NavLink>
    </NavLink>
    <div className="btn ">
    
      <Button
      variant="text"
      text="Sign In"
      component={Link}
      to="/login"> Login

                </Button>
    
    
      <Button variant="text"
              text="Sign In"
              component={Link}
              to="/login">signup</Button>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Header
