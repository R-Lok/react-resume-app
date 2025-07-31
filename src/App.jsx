import { useState } from 'react'
import './App.css'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'name': '',
    'email': '',
    'phoneNum': ''
  })

  const [educationDetails, setEducationDetails] = useState([])

  const [workDetails, setWorkDetails] = useState([])

  return (
    <div className='container'>
    </div>
  )
}

export default App
