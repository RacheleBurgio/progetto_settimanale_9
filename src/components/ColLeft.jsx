import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Links() {
  return (
    <Container>
      <Nav className="flex-column text-start">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  )
}

export default Links
