import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const PageNavBar = () => {

  return(
    <Navbar expand="md">
      <Container>
      <Navbar.Toggle aria-controls="breadbored-nav" />
      <Navbar.Collapse id="breadbored-nav" className='justify-content-end'>
        <Nav>
          <Nav.Link to = "/" as = {Link}>Home</Nav.Link>
          <Nav.Link to = "/hot-coffee" as = {Link}>Hot Coffee</Nav.Link>
          <Nav.Link to = "/iced-coffee" as = {Link}>Iced Coffee</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}
export default PageNavBar