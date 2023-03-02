import React from 'react'
import Scoreboard from './Scoreboard'

export default function Header({score, highScore, result}) {
  return (
    <div className='header'>
      <h1>Memory Game</h1>
      <Scoreboard score={score} highScore={highScore} result={result}></Scoreboard>
    </div>
    
  )
}
