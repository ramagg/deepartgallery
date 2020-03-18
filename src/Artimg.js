import React from 'react'

export default function Artimg(props) {
  return (
    <div className="imgContainer">
      <img src={props.src} alt={props.descr} />
      <div className="actions">
        <span className="details">Details</span>
        <span className="imgDwl">Download HD</span>
        <div className="detailsCo">
          <span className="imgTitle">{props.descr}</span>
          <span className="imgOrg">Orignal:</span>
          <span className="imgStyle">Style:</span>
        </div>
      </div>
    </div>
  )
}
