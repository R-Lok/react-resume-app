import EducationDetailsEditor from "./EducationDetailsEditor"
import PersonalDetailsEditor from "./PersonalDetailsEditor"

export default function EditBar({ stateManager }) {

    return (
        <div className='flex flex-col'>
            <PersonalDetailsEditor personalDetails={stateManager.personalDetails} setPersonalDetails={stateManager.setPersonalDetails}></PersonalDetailsEditor>
            <EducationDetailsEditor educationDetails={stateManager.educationDetails} setEducationDetails={stateManager.setEducationDetails}></EducationDetailsEditor>
        </div>
    )


}