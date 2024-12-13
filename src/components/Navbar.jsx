import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Nav() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{ position: 'sticky', top: 0, zIndex: 1030 }}
    >
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Nav
