import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Location = ({infoData}) => {

  return (
    <div className='location__component'>
      <div className='internal'>
        <h3>Nombre</h3>
        <p>{infoData?.name}</p>
      </div>
      <div className='internal'>
        <h3>Tipo</h3>
        <p>{infoData?.type}</p>
      </div>  
      <div className='internal'>
        <h3>Dimension</h3>
        <p>{infoData?.dimension}</p>
      </div>
      <div className='internal'>
        <h3>Residentes</h3>
        <p>{infoData.residents?.length}</p>
      </div>
    </div>
  )
}

export default Location