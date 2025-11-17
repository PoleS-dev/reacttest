import React from 'react'
import '../../assets/css/button.css'




export default function Button({text,button2}) {
    return (
        <button className={`${button2 } button1`}>{text}</button>
    )
}   