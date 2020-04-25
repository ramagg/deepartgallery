import React, { useState, useEffect } from 'react'
import ImageColumn from './ImageColumn'

const parseData = (arr) => {
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
  const [dataurl, setdataurl] = useState([])
  const [show, setShow] = useState(false)
  useEffect(() => {
    const getData = async () => {
      let res = await fetch('https://ramagg.com/deepartgallery/imgs/')
      let data = await res.json()

      console.log(data)
      setdataurl(parseData(data.imgs))
      setShow(true)

      return data
      //   .then(response => response.json())
      //   .then(data => {
      //     setdataurl(grupArr(data.imgs))
      //   })
      // console.log('Data:', dataurl)
      // return
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="artBox">
        {show
          ? dataurl.map((item, i) => {
              return <ImageColumn key={i} idx={i} imgs={item} />
            })
          : null}
      </div>
    </div>
  )
}

export default App
