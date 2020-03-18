import React, { useState, useEffect } from 'react'

export default function Artimg(props) {

  const [show, setShow] = useState(false)
  const [details, setDetails] = useState(false)
  const [rawData, setRawData] = useState(null)

  useEffect(() => {
    fetch(props.url).then((response) => {
      response.arrayBuffer().then((buffer) => {
        var base64Flag = 'data:image/jpeg;base64,';
        var imageStr = arrayBufferToBase64(buffer);
        setRawData(base64Flag + imageStr);
        setShow(true)
        // console.log(base64Flag + imageStr)
      });
    });
    function arrayBufferToBase64(buffer) {
      var binary = '';
      var bytes = [].slice.call(new Uint8Array(buffer));

      bytes.forEach((b) => binary += String.fromCharCode(b));

      return window.btoa(binary);
    };
  }, [details])
  return (
    <div className={show ? "imgContainer" : "hide"}>
      {/* <img src={props.src} alt={props.descr} onLoad={setShow(true)} /> */}
      <img src={rawData} alt={props.descr} />
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
