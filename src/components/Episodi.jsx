function Episodi() {
  const headingStyles = {
    fontSize: '25px',
  }

  return (
    <div className="mt-5">
      <h1 className="text-start ms-3" style={headingStyles}>
        Nuovi episodi radio<i className="bi bi-chevron-right"></i>
      </h1>
      <div className="row p-2">
        {/* Colonne responsabili di adattarsi in base alla larghezza dello schermo */}
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start ms-4 mb-3">
          <img
            src="/assets/images/2a.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
          <p>pròlogo con Abuelo</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start mb-3">
          <img
            src="/assets/images/2b.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
          <p>The wanderer</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start mb-3">
          <img
            src="/assets/images/2c.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
          <p>Michael Bublé & Carly Pearce</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start mb-3">
          <img
            src="/assets/images/2d.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
          <p>stephan Moccio: The Zane Lowe Interview</p>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-2 text-start mb-3">
          <img
            src="/assets/images/2e.png"
            alt="Nuova stazione radio"
            className="img-fluid"
          />
          <p>Chart Spotlight: Julia Michaels</p>
        </div>
      </div>
    </div>
  )
}

export default Episodi
