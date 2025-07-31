import EditorExperienceList from "./EditorExperienceList"

export default function EducationDetailsEditor( {educationDetails, setEducationDetails} ) {

    const deleteEducationElement = (indexToRemove) => {
        setEducationDetails(prev => {
            return prev.filter((_, index) => index !==  indexToRemove)
        })
    } 

    return (
        <div>
            <h1>Education</h1>
            <EditorExperienceList experiences={educationDetails} removeElement={deleteEducationElement}></EditorExperienceList>
        </div>
    )
}