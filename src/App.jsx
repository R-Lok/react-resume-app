import { useState } from 'react'
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'name': '',
    'email': '',
    'phoneNum': ''
  })

  return (
    <div className='container'>
    </div>
  )
}

export default App
