function Esplorare() {
  const headingStyles = {
    fontSize: '30px',
  }

  const paragraphStyle = {
    backgroundColor: '#2A2A2A',
    padding: '10px',
    borderRadius: '5px',
    color: 'red',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const rowStyle = {
    marginBottom: '5px',
  }

  return (
    <>
      <h1 className="text-start ms-3" style={headingStyles}>
        Altro da esplorare
      </h1>

      {/* Prima riga con le colonne */}
      <div className="row ps-2" style={rowStyle}>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Esplora per genere</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Worldwide</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Video musicali</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      {/* Seconda riga con le colonne */}
      <div className="row ps-2" style={rowStyle}>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Decenni</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Classifiche</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Nuovi artisti</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      {/* Terza riga con le colonne */}
      <div className="row ps-2" style={rowStyle}>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Attività e stati d'animo</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Audio spaziale</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div
          className="col-12 col-sm col-md col-lg text-start"
          style={paragraphStyle}
        >
          <p>Hit del passato</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </>
  )
}

export default Esplorare
