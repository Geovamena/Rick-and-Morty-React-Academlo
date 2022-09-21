import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Location from './components/Location'
import CardResident from './components/CardResident'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [infoData, setInfoData] = useState([])
  const [searchInput, setSearchInput] = useState('')



  useEffect(() => {
    let numberocation
    if (searchInput === '') {
      numberocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberocation = searchInput
    }
    const url = `https://rickandmortyapi.com/api/location/${numberocation}`
    axios.get(url)
      .then(response => setInfoData(response.data))
      .catch(err => console.log(err))

  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }


  return (
    <div className="App">
      <img className='imagen__portada' src="https://images8.alphacoders.com/114/1148255.jpg" alt="" />
      <form className='form-search' onSubmit={handleSubmit}>
        <input className='input' id='search' type="text" placeholder='Search ID' />
        <button className='btn__submit'>Search</button>
      </form>

      <div className='location__information'>
        <Location infoData={infoData} />
      </div>
      <div className='imagen__information'>
        {infoData.residents?.map(url => (
          <CardResident
            key={url}
            url={url} />
        ))}
      </div>

      <footer>
        <div className="footer1">
          <div className="footer2">
            <h3 >Contact Us:</h3>
          </div>
          <ol className="footer3">
            <a href="mailto:geomenacontact@gmail.com" target="_blank"> <FontAwesomeIcon icon={faEnvelope}/></a>
            <a href="https://www.linkedin.com/in/geovanni-mena-651b05240/" target="_blank"> <i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Geovamena" target="_blank"><i className="fa-brands fa-github"></i></a>
          </ol>
        </div>
      </footer>
    </div>


  )
}

export default App
