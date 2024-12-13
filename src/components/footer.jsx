function MyFooter() {
  const styles = {
    backgroundColor: '#323232',
  }
  return (
    <>
      <div style={styles}>
        <div className="d-flex mt-5">
          <p className="me-3">Italia</p>
          <p> | English(UK)</p>
        </div>
        <div className="d-flex">
          <p className="me-3">Copyright 2024</p>
          <p> Apple Inc.</p>
          <p> Tutti i diritti riservati</p>
        </div>
        <div className="d-flex">
          <p className="me-3">Condizioni dei servizi internet | </p>
          <p className="me-3"> Apple Music e privacy |</p>
          <p className="me-3"> avviso sui cookie |</p>
          <p className="me-3"> Supporto |</p>
          <p className="me-3"> Feedback </p>
        </div>
      </div>
    </>
  )
}

export default MyFooter
