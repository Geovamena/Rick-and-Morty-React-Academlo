import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = url => {

    const [answer, setAnswer] = useState()

    useEffect(() => {
      axios.get(url)
      .then(res => setAnswer(res.data))
      .catch(err => console.log(err))
    }, [])
    

  return answer
}

export default useFetch