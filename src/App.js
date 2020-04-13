import React, { useState, useEffect } from 'react'
import ImageColumn from './ImageColumn'

const grupArr = arr => {
  let startArr = arr
  let lenSA = startArr.length
  let grupedArr = []
  let columns = 4

  let div = parseInt(lenSA / columns)
  for (let i = 0; i < columns; i++) {
    let temp = startArr.slice(i * div, (i + 1) * div)
    grupedArr.push(temp)
  }
  return grupedArr
}

function App() {
  const [dataurl, setdataurl] = useState({ imgs: [] })

  const getData = () => {
    fetch('https://ramagg.com/deepartgallery/imgs/')
      .then(response => response.json())
      .then(data => {
        setdataurl(data)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  let grupedArr = grupArr(dataurl.imgs)

  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="artBox">
        {grupedArr.map((item, i) => {
          return <ImageColumn key={i} idx={i} imgs={item} />
        })}
      </div>
    </div>
  )
}

export default App
