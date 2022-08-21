import React from 'react'
import { Navbar ,Container,Nav} from 'react-bootstrap'


function Navb() {
  return (
    <div>
         <Navbar className='bg-primary'>
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="PostUser">Users</Nav.Link>
          <Nav.Link href="UserListe">User-List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navb