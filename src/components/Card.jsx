import React from "react"
import cardCss from "../styles/Card.module.css"

export default function Card(props){

    let badgeText

    if(props.item.openSpots < 1){
        badgeText = "Sold Out"
    }
    if(props.item.openSpots === "Online"){
        badgeText = "Online"
    }

    return(
        <div className={cardCss.content}>
            {/* <p>{badgeText}</p> */}
            <img src={`/imgs/${props.item.coverImg}`} className={cardCss.cardImg} />
            <div className={cardCss.stats}>
                <img src="/imgs/starImg.png" className={cardCss.star}/>
                <p>{props.item.stats.rating} ({props.item.stats.reviewCount}) • {props.item.location}</p>
            </div>
            <p>{props.item.title}</p>
            <div className={cardCss.price}>
                <h4>From ${props.item.price}</h4><p> / person</p>
            </div>
            
        </div>
    )
}