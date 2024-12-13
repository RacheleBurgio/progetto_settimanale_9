import React, { useState, useEffect } from 'react'

const headingStyles = {
  fontSize: '25px',
}

function NuoveUscite() {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchSongs = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=Gaga`
      )
      const data = await response.json()
      setSongs(data.data)
      setLoading(false)
    } catch (error) {
      console.error('Errore nel caricamento dei dati:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSongs('la tua ricerca')
  }, [])

  const chunkArray = (arr, size) => {
    const result = []
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size))
    }
    return result
  }

  const rows = chunkArray(songs, 5)

  return (
    <>
      <h1 className="text-start ms-3" style={headingStyles}>
        Nuove Uscite<i className="bi bi-chevron-right"></i>
      </h1>

      {loading ? (
        <p>Caricamento in corso...</p>
      ) : (
        rows.map((row, rowIndex) => (
          <div key={rowIndex} className="row p-2 d-flex">
            {row.map((song, index) => (
              <div
                key={index}
                className="col-12 col-sm-3 col-md-4 col-lg text-start ms-4 d-flex flex-column justify-content-between"
                style={{ height: '100%' }}
              >
                <img
                  src={song.album.cover_big}
                  alt={song.title}
                  className="img-fluid"
                  style={{
                    objectFit: 'cover',
                    height: '200px',
                    width: '100%',
                  }}
                />
                <div style={{ marginTop: '5px' }}>
                  <p style={{ marginBottom: '0' }}>{song.title}</p>
                  <p
                    style={{ marginTop: '0', fontSize: '0.9em', color: '#777' }}
                  >
                    {song.artist.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </>
  )
}

export default NuoveUscite
