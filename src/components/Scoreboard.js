import React from 'react'

export default function Scoreboard({score, highScore, result}) {
  return (
    <div className='scoreboard'>
      <div className="scores">
        <div>Current Score: <span id='score'>{score}</span></div>
        <div>High Score: <span id='high-score'>{highScore}</span></div>
      </div>
      <div className="result">{result}</div>
    </div>
  )
}
