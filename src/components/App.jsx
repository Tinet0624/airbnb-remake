import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import cardData from "../data"
import appCss from "../styles/App.module.css"

export default function App() {

  const cardList = cardData.map((item)=>{
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

    return(
      <div className={appCss.content}>
        <Navbar />
        <Hero />
        <section className={appCss.cardList}>
          {cardList}
        </section>
      </div>
    )
}