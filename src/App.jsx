import React from 'react'
import{BrowserRouter ,Route,Routes} from 'react-router-dom'
import Nav from './components/Nav'
import GameCardContainer from './components/GameCardContainer'
import AddGame from './pages/AddGame'
import EditGame from './pages/EditGame'

const App = () => {
  return (
    <div>
      <Nav/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GameCardContainer/>}/>
          <Route path='/add-game' element={<AddGame/>}/>
          <Route path='/edit-game' element={<EditGame/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App