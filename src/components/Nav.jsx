import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='nav-container'>
        <a href='/home'><img src='https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-black-badge-01-22sep20?$200px--t$'/></a>
        <div><Link to="/add-game">Add Game</Link></div>
        <div><Link to="/edit-game">Edit Game</Link></div>
        <div><Link to='/'>LogOut</Link></div>
        <h2>My Games Library</h2>
    </div>
  )
}

export default Nav