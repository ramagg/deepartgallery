import React from 'react';
import Artimg from './Artimg'
import { isCompositeComponent } from 'react-dom/test-utils';

let data = { "imgs": [{ "src": "Fox-colorful-Filia-.jpg", "title": "Fox", "style": "colorful", "original": "Filia" }, { "src": "mclaren-paiting-pablo-.jpg", "title": "mclaren", "style": "paiting", "original": "pablo" }, { "src": "moto-colorful-Clara-.jpg", "title": "moto", "style": "colorful", "original": "Clara" }, { "src": "title-style-orignal- (10).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (11).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (12).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (13).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (2).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (3).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (4).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (5).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (6).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (7).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (8).jpg", "title": "title", "style": "style", "original": "orignal" }, { "src": "title-style-orignal- (9).jpg", "title": "title", "style": "style", "original": "orignal" }] }

function App() {
  return (
    <div className="App">
      <header>
        <h1>DeepArtGallery</h1>
      </header>
      <div className="artBox">
        {
          data.imgs.map((item, i) => {
            return <Artimg key={i} src={`https://ramagg.com/deepartgallery/imgs/${item.src}`} descr={item.title} />
          })
        }
      </div>
    </div>
  );
}

export default App;
