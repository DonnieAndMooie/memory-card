import React from 'react'

export default function Scoreboard() {
  return (
    <div className='scoreboard'>
      <div>Current Score: <span id='score'>0</span></div>
      <div>High Score: <span id='high-score'>0</span></div>
    </div>
  )
}
