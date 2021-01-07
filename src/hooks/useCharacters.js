import { useState, useEffect } from 'react'

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch(url).then(response => response.json()).then(res => setCharacters(res.results))
  }, [url])
  return characters;
}

export default useCharacters