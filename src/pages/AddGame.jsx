import React from 'react'
import axios from 'axios'
import './AddGame.css'
const AddGame = () => {
  const [game , setGame] = React.useState({
    name:'',
    image_url:'',
    completed:false
  })

  const handleChange = (event) => {
    setGame({
      ...game,[event.target.name]:event.target.value
    })
  }
  
  const handlePost = (event) =>{
    event.preventDefault();
    axios.post('https://games-library-wbdz.onrender.com/mygames/',game)
    .then((res)=>{
      console.log(res)
      alert('Game Added')
    }).catch((err)=>{
      console.log(err)
      alert('Failed to add new game')
    })
  }


  return (
    <>
    <div className='formcontainer'>
        <form className='forms'>
            <label>Name:<br></br><input onChange={handleChange} className='input' type="text" name="name" id="name"/> </label>
            <label >Image URL:<br></br> <input onChange={handleChange} className='input' type="text" name="image_url" id="image_url"/><br/></label>
            <div className='completed'>
            <label htmlFor="completed">Completed</label>
            <input onChange={handleChange} type="radio" name="completed" value={true} id="true"/>
            <label htmlFor="true">True</label>
            <input onChange={handleChange} type="radio" name="completed" value={false} id="false"/>
            <label htmlFor="false">False</label></div>
            <button className='submit' type="submit" onClick={handlePost}>Add Game</button>
        </form>
        </div>
    </>
  )
}

export default AddGame