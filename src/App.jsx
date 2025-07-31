import { useState } from 'react'
import './App.css'
import EditBar from './components/EditBar'
import { ResumeDisplay } from './components/ResumeDisplay'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'name': '',
    'email': '',
    'phone': ''
  })

  const [educationDetails, setEducationDetails] = useState([
    {
      id: crypto.randomUUID(),
      name: 'Masters Degree in Code',
      location: 'University of Bla',
      startDate: '2018-01-01',
      endDate: '2023-12-01',
      description: '- Led the student union\n - Completed with 99% GPA'
    }
  ]) //mock for now, set to Empty when completed

  const [workDetails, setWorkDetails] = useState([])

  const stateManager = {
    personalDetails, setPersonalDetails, educationDetails, setEducationDetails, workDetails, setWorkDetails
  }

  return (
    <div className='container flex gap-24 w-screen h-screen'>
      <EditBar stateManager={stateManager}></EditBar>
      <ResumeDisplay personalDetails={personalDetails} educationDetails={educationDetails} workDetails={workDetails}></ResumeDisplay>
    </div>
  )
}

export default App
