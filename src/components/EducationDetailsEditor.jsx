import EditorExperienceList from "./EditorExperienceList"

export default function EducationDetailsEditor( {educationDetails, setEducationDetails} ) {

    const deleteEducationElement = (indexToRemove) => {
        setEducationDetails(prev => {
            return prev.filter((_, index) => index !==  indexToRemove)
        })
    } 

    const editEducationElement = (indexToEdit, newElement) => {
        setEducationDetails(prev => {
            return prev.map( (element, index) => {
                return index === indexToEdit ? newElement : element
            })
        })
    }

    return (
        <div>
            <h1>Education</h1>
            <EditorExperienceList experiences={educationDetails} removeElement={deleteEducationElement} editElement={editEducationElement}></EditorExperienceList>
        </div>
    )
}