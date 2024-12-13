import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Nav from './components/Navbar'
import SearchBar from './components/searchbar'
import Links from './components/ColLeft'
import Novità from './components/novità'
import Episodi from './components/Episodi'
import NuoveUscite from './components/nuoveUscite'
import Esplorare from './components/Esplorare'
import MyFooter from './components/footer'

function App() {
  return (
    <>
      <main>
        <div className="App">
          <div className="row g-0">
            {/* Colonna più piccola */}
            <div className="col-2 ">
              <div
                style={{
                  backgroundColor: '#252526',
                  height: '100vh',
                  overflowX: 'hidden',
                }}
              >
                <SearchBar />
                <Links />
              </div>
            </div>
            {/* Colonna più grande */}
            <div className="col-10">
              <div
                style={{
                  backgroundColor: '#1F1F1F',
                  height: '100vh',
                  overflowX: 'hidden',
                  color: 'white',
                }}
              >
                <Nav />
                <Novità />
                <Episodi />
                <NuoveUscite />
                <Esplorare />
                <MyFooter />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
