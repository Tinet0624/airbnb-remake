import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import cardData from "../data"

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
      <div>
        <Navbar />
        <Hero />
        <section>
          {cardList}
        </section>
      </div>
    )
}