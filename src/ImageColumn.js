import React from 'react'
import Artimg from './Artimg'

export default function ImageColumn(props) {
  return (
    <div className="imageColumn">
      {
        props.imgs.map((item, i) => {
          return <Artimg key={i} src={`https://ramagg.com/deepartgallery/imgs/${item.src}`} descr={item.title} />
        })
      }
    </div>
  )
}
