import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Button } from 'react-bootstrap'

function Nav() {
  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: '#2C2C2C',
        position: 'sticky',
        top: 0,
        zIndex: 1030,
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <i className="bi bi-shuffle me-3" style={{ color: 'white' }}></i>
          <i
            className="bi bi-skip-backward-fill me-3"
            style={{ color: 'white' }}
          ></i>
          <i className="bi bi-play-fill me-3" style={{ color: 'white' }}></i>
          <i
            className="bi bi-skip-forward-fill me-3"
            style={{ color: 'white' }}
          ></i>
          <i className="bi bi-repeat" style={{ color: 'white' }}></i>
        </div>

        <div
          className="d-flex justify-content-center"
          style={{
            backgroundColor: '#4D4D4D',
            padding: '5px 15px',
            borderRadius: '5px',
            width: '30em',
            height: 'auto',
          }}
        >
          <img
            src="/assets/logos/apple.svg"
            alt="Apple logo"
            style={{ width: '30px', height: 'auto', filter: 'invert(1)' }}
          />
        </div>

        <div className="d-flex align-items-center">
          <i className="bi bi-volume-up me-3" style={{ color: 'white' }}></i>

          <div
            style={{
              width: '100px',
              height: '5px',
              backgroundColor: '#888',
              borderRadius: '5px',
            }}
          >
            <div
              style={{
                width: '60%',
                height: '100%',
                backgroundColor: 'white',
                borderRadius: '5px',
              }}
            />
          </div>

          <Button variant="danger" className="ms-3">
            <i className="bi bi-person-fill" style={{ color: 'white' }}></i>
            accedi
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default Nav
