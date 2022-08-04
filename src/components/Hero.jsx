import React from "react"
import heroImg from "../images/heroImg.png"
import heroCss from "../styles/Hero.module.css"

export default function Navbar(){
    return(
        <div>
            <img src={heroImg} className={heroCss.logo} />
            <h1 className={heroCss.title}>Online Experiences</h1>
            <p className={heroCss.content}>
                Join unique interactive activities led by one-of-a-kind hosts—all 
                without leaving home.
            </p>
        </div>
    )
}