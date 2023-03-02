import React, { useEffect, useState } from 'react'
import Card from './Card'
import Header from './Header'
import Messi from '../images/messi.jpg'
import Alisson from '../images/alisson.jpeg'
import Belllingham from '../images/bellingham.jpg'
import Benzema from '../images/benzema.jpeg'
import DeBruyne from '../images/de-bruyne.webp'
import Foden from '../images/foden.jpeg'
import Haaland from '../images/haaland.jpg'
import Mane from '../images/mane.jpeg'
import Mbappe from '../images/mbappe.jpg'
import Modric from '../images/modric.webp'
import Ronaldo from '../images/ronaldo.jpg'
import Saka from '../images/saka.jpeg'
import Salah from '../images/salah.jpg'
import VanDijk from '../images/van-dijk.jpeg'
import Vinicius from '../images/vinicius.jpg_large'

const players = [
  {
    src: Messi,
    name: "Messi",
    originalIndex: 0
  },
  {
    src: Alisson,
    name: "Alisson",
    originalIndex: 1
  },
  {
    src: Belllingham,
    name: "Bellingham",
    originalIndex: 2
  },
  {
    src: Benzema,
    name: "Benzema",
    originalIndex: 3
  },
  {
    src: DeBruyne,
    name: "De Bruyne",
    originalIndex: 4
  },
  {
    src: Foden,
    name: "Foden",
    originalIndex: 5
  },
  {
    src: Haaland,
    name: "Haaland",
    originalIndex: 6
  },
  {
    src: Mane,
    name: "Mane",
    originalIndex: 7
  },
  {
    src: Mbappe,
    name: "Mbappe",
    originalIndex: 8
  },
  {
    src: Modric,
    name: "Modric",
    originalIndex: 9
  },
  {
    src: Ronaldo,
    name: "Ronaldo",
    originalIndex: 10
  },
  {
    src: Saka,
    name: "Saka",
    originalIndex: 11
  },
  {
    src: Salah,
    name: "Salah",
    originalIndex: 12
  },
  {
    src: VanDijk,
    name: "Van Dijk",
    originalIndex: 13
  },
  {
    src: Vinicius,
    name: "Vinicius Jr",
    originalIndex: 14
  },
]

function shuffleCards(){
  const shuffledCards = []
  const indexUsed = []
  while(shuffledCards.length < players.length){
    const randomIndex = Math.floor(Math.random() * 15)
    if (!indexUsed.includes(randomIndex)){
      shuffledCards.push(players[randomIndex])
      indexUsed.push(randomIndex)
    }
  }
  return shuffledCards
}

export default function Game() {
  const [cards, setCards] = useState(players)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clickedCards, setClickedCards] = useState([])
  const [result, setResult] = useState("")

  

  function cardClickHandler(originalIndex){
    setResult("")
    if (clickedCards.includes(originalIndex)){
      setResult("You Lose!")
      setScore(0)
      setClickedCards([])
    }
    else{
      setClickedCards([...clickedCards, originalIndex])
      setScore(score + 1)
      if (score >= highScore){
        setHighScore(highScore + 1)
      }
    }
    
    setCards(shuffleCards())
  }

  useEffect(() => {
    if (score === 15){
      setResult("Congratulations! You Win!")
      setScore(0)
      setClickedCards([])
    }
  }, [score])

  return (
    <div className='container'>
      <Header score={score} highScore={highScore} result={result}></Header>
    <div className='game'>
      {cards.map((player) => {
        return <Card imgSrc={player.src} name={player.name} key={player.originalIndex} onClick={(e) => cardClickHandler(player.originalIndex)} originalIndex={player.originalIndex}></Card>
      })}
    </div>
    </div>
    
  )
}
