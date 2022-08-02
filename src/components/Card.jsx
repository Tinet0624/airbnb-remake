import React from "react"
import cardImg from "../images/weddingImg.png"
import starImg from "../images/starImg.png"

// use props and make dynamic

export default function Navbar(){
    return(
        <div>
            <p>badge</p>
            <img src={cardImg}/>
            <div className="stats">
                <img src={starImg} />
                <p>5.0</p>
                <p>(6)</p>
                <p> • </p>
                <p>USA</p>
            </div>
            <p>Life lessons with Kate Zaferes</p>
            <p>From $136/ person</p>
        </div>
    )
}