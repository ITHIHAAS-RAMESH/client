import React from 'react'
import GameCard from './GameCard'
import './gamecard-container.css'
import axios from 'axios'


const GameCardContainer = () => {
    const [filter,setFilter] = React.useState('all')
    const [games, setGames] = React.useState([])
    React.useEffect(() => {
  axios.get(`https://games-library-wbdz.onrender.com/mygames/${filter}`)
  .then(async function (data){
    console.log(data.data)
    await setGames(data.data)
    
  }).catch((err) => {console.log(err)})},[filter])

  console.log(games)



  return (
    <>
    <div className='filter-container'>
        <div className={`${filter==='all' && "active"}`} onClick={() => setFilter('all')}>All</div>
        <div className={`${filter==='completed' && "active"}`} onClick={() => setFilter('completed')}>Completed</div>
        <div className={`${filter==='playing' && "active"}`} onClick={() => setFilter('playing')}>Playing</div>
      </div>
    <div className='gamecardcontainer'>
      
        {games.map((game) => (<GameCard key={game._id} name={game.name} completed={game.completed} image_url={game.image_url}/>))}
        
    </div>
    </>
  )
}

export default GameCardContainer