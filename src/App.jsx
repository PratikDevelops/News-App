import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Newsborad from './Components/Newsborad'


function App() {
  const [category,setCategory] = useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsborad category={category}/>
      
    </div>
  )
}

export default App