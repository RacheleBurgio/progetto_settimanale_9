function Esplorare() {
  return (
    <>
      <h1 className="text-start ms-3">Altro da esplorare</h1>
      <div className="row p-2">
        {/* Prima riga con le colonne */}
        <div className="col text-start">
          <p>Esplora per genere</p>
        </div>
        <div className="col text-start">
          <p>Worldwide</p>
        </div>
        <div className="col text-start">
          <p>Video musicali</p>
        </div>

        <div className="row p-2">{/* Seconda riga con le colonne */}</div>
        <div className="col text-start">
          <p>Decenni</p>
        </div>
        <div className="col text-start">Classifiche</div>
        <div className="col text-start">Nuovi artisti</div>

        <div className="row p-2">{/* Terza riga con le colonne */}</div>
        <div className="col text-start">
          <p>attività e stati d'animo</p>
        </div>
        <div className="col text-start">
          <p>Audio spaziale</p>
        </div>
        <div className="col text-start">Hit del passato</div>
      </div>
    </>
  )
}

export default Esplorare
