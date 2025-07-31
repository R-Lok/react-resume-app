import EditorExperienceList from "./EditorExperienceList"
import { Experience } from "../models/experience"

export default function ExperienceDetailsEditor({ experienceTypeName, experienceDetails, setExperienceDetails }) {

    const deleteExperienceElement = (indexToRemove) => {
        setExperienceDetails(prev => {
            return prev.filter((_, index) => index !== indexToRemove)
        })
    }

    const editExperienceElement = (indexToEdit, newElement) => {
        setExperienceDetails(prev => {
            return prev.map((element, index) => {
                return index === indexToEdit ? newElement : element
            })
        })
    }

    const addExperienceElement = () => {
        setExperienceDetails(prev => {
            return [...prev,
            new Experience(
                'New ' + experienceTypeName,
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
            <h1>{experienceTypeName}</h1>
            <EditorExperienceList experiences={experienceDetails} removeElement={deleteExperienceElement} editElement={editExperienceElement}></EditorExperienceList>
            <button onClick={addExperienceElement}>Add {experienceTypeName} Experience</button>
        </div>
    )
}