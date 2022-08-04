import React from "react"
import airLogo from "../images/airbnbLogo.png"
import navCss from "../styles/Navbar.module.css"

export default function Navbar(){
    return(
        <div className={navCss.navbar}>
            <img src={airLogo} className={navCss.logo} />
        </div>
    )
}