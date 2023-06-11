import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-container'>
        <a href='/'><img src='https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-black-badge-01-22sep20?$200px--t$'/></a>
        <a href='/add-game'>Add Game</a>
        <a href='/edit-game'>Edit Game</a>
        <h2>My Games Library</h2>
    </div>
  )
}

export default Nav