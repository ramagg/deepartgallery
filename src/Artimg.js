import React, { useState } from 'react'

export default function Artimg(props) {

  const [show, setShow] = useState(true)
  const [details, setDetails] = useState(false)

  return (
    <div className={show ? "imgContainer" : "hide"}>
      {/* <img src={props.src} alt={props.descr} onLoad={setShow(true)} /> */}
      <img src={props.src} alt={props.descr} />
      <div className="actions">
        <span className="details" onClick={() => setDetails(x => !x)}>Details</span>
        <span className="imgDwl" onClick={() => window.location = props.src}>Download HD</span>
        <div className={details ? "showDetails" : 'hide'} id={props.idx}>
          <span className="imgTitle">{props.descr}</span>
          <span className="imgOrg">Orignal:</span>
          <span className="imgStyle">Style:</span>
        </div>
      </div>
    </div>
  )
}
