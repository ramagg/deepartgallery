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
      setdataurl(parseData(data.imgs))
      setShow(true)

      return data
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="mainDescr">
        Neural style transfer is an optimization technique used to take two
        images—a content image and a style reference image (such as an artwork
        by a famous painter)—and blend them together so the output image looks
        like the content image, but “painted” in the style of the style
        reference image. This is implemented by optimizing the output image to
        match the content statistics of the content image and the style
        statistics of the style reference image. These statistics are extracted
        from the images using a convolutional network.
        <p>
          <a href="https://www.tensorflow.org/tutorials/generative/style_transfer">
            Tensorflow Implementation
          </a>
        </p>
        <p>
          <a href="https://pytorch.org/tutorials/advanced/neural_style_tutorial.html?highlight=style%20transfer">
            PyTorch Implementation
          </a>
        </p>
      </div>
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
