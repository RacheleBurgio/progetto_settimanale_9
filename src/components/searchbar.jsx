import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

function SearchBar() {
  return (
    <>
      <div style={{ textAlign: 'left', marginLeft: '10px' }}>
        <img
          src="/assets/logos/music.svg"
          alt="logo"
          style={{ width: '8em', height: '3em', filter: 'invert(1)' }}
        />
      </div>

      {/* Barra di ricerca visibile solo su schermi di medie dimensioni e superiori */}
      <Form className="d-flex p-3 d-none d-md-flex">
        <InputGroup>
          <InputGroup.Text>
            <i className="bi bi-search"></i> {/* Icona di Bootstrap */}
          </InputGroup.Text>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </InputGroup>
      </Form>
    </>
  )
}

export default SearchBar
