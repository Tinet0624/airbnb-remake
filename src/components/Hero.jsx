import React from "react"
import heroImg from "../images/heroImg.png"

export default function Navbar(){
    return(
        <div>
            <img src={heroImg}/>
            <h1>Title</h1>
            <p>text here</p>
        </div>
    )
}