import { useState } from 'react'
import './App.css'
import { Experience } from './models/experience'
import EditBar from './components/EditBar'
import { ResumeDisplay } from './components/ResumeDisplay'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    'name': '',
    'email': '',
    'phone': ''
  })

  const [educationDetails, setEducationDetails] = useState([
    new Experience(
      'Masters Degree in Code',
      'University of Bla',
      '2018-01-01',
      '2023-12-01',
      '- Led the student union\n - Completed with 99% GPA'
    )
  ]) //mock for now, set to Empty when completed

  const [workDetails, setWorkDetails] = useState([
    new Experience(
      'Research Assistant',
      'Brainwaves Ltd.',
      '2023-03-20',
      '2025-05-20',
      '- Scanned brain images of patients \n - Responsible for operating MRI machinery'
    )
  ]) //mock for now, set to Empty when completed

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
