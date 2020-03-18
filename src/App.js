import React from 'react';
import ImageColumn from './ImageColumn'

let data = { "imgs": [{ "src": "Fox-colorful-Filia-.jpg", "title": "Fox", "style": "colorful", "original": "Filia" }, { "src": "mclaren-paiting-pablo-.jpg", "title": "mclaren", "style": "paiting", "original": "pablo" }, { "src": "moto-colorful-Clara-.jpg", "title": "moto", "style": "colorful", "original": "Clara" }, { "src": "title-style-orignal- (10).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (11).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (12).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (13).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (2).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (3).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (4).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (5).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (6).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (7).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (8).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (9).jpg", "title": "title", "style": "style", "original": "orignal" }] }

function App() {

  let startArr = data.imgs;
  let lenSA = startArr.length;
  let grupedArr = [];
  let div = parseInt(lenSA / 3);
  for (let i = 0; i < 3; i++) {
    let temp = startArr.slice(i * div, (i + 1) * div);
    grupedArr.push(temp)
  }
  console.log(grupedArr);

  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="artBox">
        {
          grupedArr.map((item, i) => {
            return <ImageColumn key={i} imgs={item} />
          })
        }
      </div>
    </div>
  );
}

export default App;
