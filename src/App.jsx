import { useState } from 'react'
import './App.css'
import EditBar from './components/EditBar'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'name': '',
    'email': '',
    'phoneNum': ''
  })

  const [educationDetails, setEducationDetails] = useState([])

  const [workDetails, setWorkDetails] = useState([])

  const stateManager = {
    personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workDetails, setWorkDetails
  }

  return (
    <div className='container'>
      <EditBar stateManager={stateManager}></EditBar>
    </div>
  )
}

export default App
