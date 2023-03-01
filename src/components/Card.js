import React from 'react'

export default function Card({imgSrc, name}) {
  return (
    <div className="card">
      <strong className='player-name'>{name}</strong>
      <img src={imgSrc} alt={name}/>
    </div>
  )
}
