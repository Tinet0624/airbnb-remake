import React from "react"

export default function Card(props){

    let badgeText

    if(props.item.openSpots < 1){
        badgeText = "Sold Out"
    }
    if(props.item.openSpots === "Online"){
        badgeText = "Online"
    }

    return(
        <div>
            <p>{badgeText}</p>
            <img src={`/imgs/${props.item.coverImg}`} />
            <div className="stats">
                <img src="/imgs/starImg.png" />
                <p>{props.item.stats.rating} ({props.item.stats.reviewCount}) • {props.item.location}</p>
            </div>
            <p>{props.item.title}</p>
            <p>From ${props.item.price}/ person</p>
        </div>
    )
}