import React, { useState, useEffect } from 'react';
import ImageColumn from './ImageColumn'

let data = { "imgs": [{ "src": "Fox-colorful-Filia-.jpg", "title": "Fox", "style": "colorful", "original": "Filia" }, { "src": "mclaren-paiting-pablo-.jpg", "title": "mclaren", "style": "paiting", "original": "pablo" }, { "src": "moto-colorful-Clara-.jpg", "title": "moto", "style": "colorful", "original": "Clara" }, { "src": "title-style-orignal- (10).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (11).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (12).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (13).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (2).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (3).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (4).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (5).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (6).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (7).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (8).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (9).jpg", "title": "title", "style": "style", "original": "orignal" }] }

const grupArr = (arr) => {
  let startArr = arr;
  let lenSA = startArr.length;
  let grupedArr = [];
  let columns = 4;

  let div = parseInt(lenSA / columns);
  for (let i = 0; i < columns; i++) {
    let temp = startArr.slice(i * div, (i + 1) * div);
    grupedArr.push(temp)
  }
  return grupedArr;
}

function App() {
  const [dataurl, setdataurl] = useState({ "imgs": [] })

  const getData = () => {

    fetch('https://ramagg.com/deepartgallery/imgs/').then((response) => response.json())
      .then((data) => {
        console.log("Fetching")
        setdataurl(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  let grupedArr = grupArr(dataurl.imgs)



  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="artBox">
        {
          grupedArr.map((item, i) => {
            return <ImageColumn key={i} idx={i} imgs={item} />
          })
        }
      </div>
    </div>
  );
}

export default App;
