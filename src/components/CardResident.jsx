import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import useFetch from './useFetch'

const CardResident = ({url}) => {

        const resident = useFetch(url)

        console.log(resident)

  return (
    <div className='card__information'>
        <img src={resident?.image} alt="" />
        <h2>{resident?.name}</h2>
        <p>Estado: <span className='span-live'>{resident?.status}</span> </p>
        <p>Origen: {resident?.origin.name}</p>
        <p>Capitulos: {resident?.episode.length}</p>
        
    </div>
  )
}

export default CardResident