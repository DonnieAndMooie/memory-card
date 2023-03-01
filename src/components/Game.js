import React from 'react'
import Card from './Card'
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
    name: "Messi"
  },
  {
    src: Alisson,
    name: "Alisson"
  },
  {
    src: Belllingham,
    name: "Bellingham"
  },
  {
    src: Benzema,
    name: "Benzema"
  },
  {
    src: DeBruyne,
    name: "De Bruyne"
  },
  {
    src: Foden,
    name: "Foden"
  },
  {
    src: Haaland,
    name: "Haaland"
  },
  {
    src: Mane,
    name: "Mane"
  },
  {
    src: Mbappe,
    name: "Mbappe"
  },
  {
    src: Modric,
    name: "Modric"
  },
  {
    src: Ronaldo,
    name: "Ronaldo"
  },
  {
    src: Saka,
    name: "Saka"
  },
  {
    src: Salah,
    name: "Salah"
  },
  {
    src: VanDijk,
    name: "Van Dijk"
  },
  {
    src: Vinicius,
    name: "Vinicius Jr"
  },
]

export default function Game() {
  return (
    <div className='game'>
      {players.map((player) => {
        return <Card imgSrc={player.src} name={player.name}></Card>
      })}
    </div>
  )
}
