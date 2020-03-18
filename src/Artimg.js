import React from 'react'

export default function Artimg(props) {
    return (
        <div className="imgContainer">
            <span className="imgTitle">{props.descr}</span>
            <img src={props.src} alt={props.descr} />
        </div>
    )
}
