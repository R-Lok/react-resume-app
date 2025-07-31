import EditorExperienceList from "./EditorExperienceList"
import { Experience } from "../models/experience"

export default function EducationDetailsEditor({ educationDetails, setEducationDetails }) {

    const deleteEducationElement = (indexToRemove) => {
        setEducationDetails(prev => {
            return prev.filter((_, index) => index !== indexToRemove)
        })
    }

    const editEducationElement = (indexToEdit, newElement) => {
        setEducationDetails(prev => {
            return prev.map((element, index) => {
                return index === indexToEdit ? newElement : element
            })
        })
    }

    const addEducationElement = () => {
        setEducationDetails(prev => {
            return [...prev,
            new Experience(
                'New School',
                '',
                '',
                '',
                ''
            )
            ]
        })
    }
    return (
        <div className='flex flex-col gap-4'>
            <h1>Education</h1>
            <EditorExperienceList experiences={educationDetails} removeElement={deleteEducationElement} editElement={editEducationElement}></EditorExperienceList>
            <button onClick={addEducationElement}>Add Education</button>
        </div>
    )
}