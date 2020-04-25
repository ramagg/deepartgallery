import React, { useState, useEffect } from 'react'

export default function Artimg(props) {
  const [show, setShow] = useState(false)
  const [details, setDetails] = useState(false)

  useEffect(() => {
    let img = new Image()

    img.onload = () => {
      setShow(true)
    }
    img.src = props.src
  }, [])

  return (
    <div className={show ? 'imgContainer' : 'hide'}>
      {/*  <div className={'imgContainer'}> */}
      <img src={props.src} alt={props.descr} />

      <div className="actions">
        <span className="details" onClick={() => setDetails((x) => !x)}>
          <i className="fa fa-info"></i> Details
        </span>
        <a className="imgDwl" href={props.src} download>
          <i className="fa fa-download"></i> Download HD
        </a>
        <div className={details ? 'showDetails' : 'hide'} id={props.idx}>
          <span className="imgTitle">{props.descr}</span>
          <span className="imgOrg">Orignal:</span>
          <span className="imgStyle">Style:</span>
        </div>
      </div>
    </div>
  )
}
