import ExperienceDetailsEditor from "./ExperienceDetailsEditor"
import PersonalDetailsEditor from "./PersonalDetailsEditor"

export default function EditBar({ stateManager }) {

    return (
        <div className='flex flex-col'>
            <PersonalDetailsEditor personalDetails={stateManager.personalDetails} setPersonalDetails={stateManager.setPersonalDetails}></PersonalDetailsEditor>
            <ExperienceDetailsEditor experienceTypeName='Education' experienceDetails={stateManager.educationDetails} setExperienceDetails={stateManager.setEducationDetails}></ExperienceDetailsEditor>
            <ExperienceDetailsEditor experienceTypeName='Work' experienceDetails={stateManager.workDetails} setExperienceDetails={stateManager.setWorkDetails}></ExperienceDetailsEditor>

        </div>
    )


}