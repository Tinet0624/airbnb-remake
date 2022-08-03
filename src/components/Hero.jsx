import React from "react"
import heroImg from "../images/heroImg.png"

export default function Navbar(){
    return(
        <div>
            <img src={heroImg}/>
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all 
                without leaving home.
            </p>
        </div>
    )
}