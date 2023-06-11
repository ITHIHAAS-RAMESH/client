import React from 'react'
import './game-card.css'
const GameCard = ({name,completed,image_url}) => {
    
  return (
    <div className='card-container'>
        <img alt='uncharted' src={image_url}/>
        <p className='game-name'>{name}</p>
        <div className='completed'>Completed<img src={completed ? `images/accept.png` : `images/cross.png`} /></div>
    </div>
  )
}

export default GameCard