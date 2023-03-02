import React from 'react'

export default function Card({imgSrc, name, onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <strong className='player-name'>{name}</strong>
      <img src={imgSrc} alt={name}/>
    </div>
  )
}
