import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Nav