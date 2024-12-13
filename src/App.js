import logo from './logo.svg'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './components/Navbar'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <div className="App">
          <div className="row g-0">
            {/* Colonna più piccola */}
            <div className="col-2">
              <div style={{ backgroundColor: '#f8f9fa', height: '57em' }}>
                Colonna piccola
              </div>
            </div>
            {/* Colonna più grande */}
            <div className="col-10">
              <div style={{ backgroundColor: '#e9ecef', height: '57em' }}>
                Colonna grande
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
