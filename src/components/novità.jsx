function Novità() {
  const styles = {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '10px',
    marginBottom: '10px',
  }
  const headingStyles = {
    fontSize: '40px',
  }

  return (
    <>
      <h1 className="text-start ms-3 mt-4" style={headingStyles}>
        Novità
      </h1>
      <hr style={styles} />
      <div className="row p-2">
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 text-start mb-4">
          <p className="mb-1" style={{ marginBottom: '3px' }}>
            Nuova stazione radio
          </p>
          <p className="mb-1" style={{ marginTop: '0', marginBottom: '8px' }}>
            Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
          </p>
          <img
            src="/assets/images/1a.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 text-start mb-4">
          <p className="mb-1" style={{ marginBottom: '3px' }}>
            Nuova stazione radio
          </p>
          <p className="mb-1" style={{ marginTop: '0', marginBottom: '8px' }}>
            Ecco la nuova casa della musica latina
          </p>
          <img
            src="/assets/images/1b.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
        </div>
      </div>
    </>
  )
}

export default Novità
