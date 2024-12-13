import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap-icons/font/bootstrap-icons.css'

function Links() {
  return (
    <Container>
      <Nav className="flex-column text-start">
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-house-door" style={{ color: 'red' }}></i>
          <Nav.Link href="#home" className="ms-1" style={{ color: 'red' }}>
            Home
          </Nav.Link>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-app" style={{ color: 'red' }}></i>
          <Nav.Link href="#features" className="ms-1" style={{ color: 'red' }}>
            Features
          </Nav.Link>
        </div>
        <div className="d-flex align-items-center mb-2">
          <i className="bi bi-broadcast" style={{ color: 'red' }}></i>
          <Nav.Link href="#pricing" className="ms-1" style={{ color: 'red' }}>
            Pricing
          </Nav.Link>
        </div>
      </Nav>
    </Container>
  )
}

export default Links
