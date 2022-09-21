import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Location from './components/Location'
import CardResident from './components/CardResident'


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
    </div>
  
  )
}

export default App
