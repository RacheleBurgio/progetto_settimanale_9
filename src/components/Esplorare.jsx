function Esplorare() {
  const headingStyles = {
    fontSize: '30px',
  }

  const paragraphStyle = {
    backgroundColor: '#2A2A2A', // Colore di sfondo
    padding: '10px', // Aggiungi un po' di padding per separare il testo dal bordo
    borderRadius: '5px', // Aggiungi angoli arrotondati
    color: 'red',
    marginLeft: '20px',
    display: 'flex', // Usa flexbox per allineare il contenuto
    justifyContent: 'space-between', // Spaziatura tra il testo e l'icona
    alignItems: 'center', // Centra verticalmente il contenuto
  }

  const rowStyle = {
    marginBottom: '5px', // Riduci il margine tra le righe
  }

  return (
    <>
      <h1 className="text-start ms-3" style={headingStyles}>
        Altro da esplorare
      </h1>

      <div className="row ps-2" style={rowStyle}>
        {/* Prima riga con le colonne */}
        <div className="col text-start" style={paragraphStyle}>
          <p>Esplora per genere</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Worldwide</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Video musicali</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="row ps-2" style={rowStyle}>
        {/* Seconda riga con le colonne */}
        <div className="col text-start" style={paragraphStyle}>
          <p>Decenni</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Classifiche</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Nuovi artisti</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>

      <div className="row ps-2" style={rowStyle}>
        {/* Terza riga con le colonne */}
        <div className="col text-start" style={paragraphStyle}>
          <p>Attività e stati d'animo</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Audio spaziale</p>
          <i className="bi bi-chevron-right"></i>
        </div>
        <div className="col text-start" style={paragraphStyle}>
          <p>Hit del passato</p>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </>
  )
}

export default Esplorare
