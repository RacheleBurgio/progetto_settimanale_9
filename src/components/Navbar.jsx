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
        {/* Gruppo icone di controllo */}
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

        {/* Logo con sfondo e forma rettangolare */}
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

        {/* Gruppo icone e pulsante */}
        <div className="d-flex align-items-center">
          <i className="bi bi-volume-up me-3" style={{ color: 'white' }}></i>

          {/* Barra del volume */}
          <div
            style={{
              width: '100px', // larghezza della barra del volume
              height: '5px', // altezza della barra
              backgroundColor: '#888', // colore della barra
              borderRadius: '5px',
            }}
          >
            {/* Barra dinamica (livello volume) */}
            <div
              style={{
                width: '60%', // valore del volume (può essere dinamico)
                height: '100%',
                backgroundColor: 'white', // colore della barra del volume
                borderRadius: '5px',
              }}
            />
          </div>

          {/* Bottone rosso con icona */}
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
