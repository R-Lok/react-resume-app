import PersonalDetailsEditor from "./PersonalDetailsEditor"

export default function EditBar({ stateManager }) {

    return (
        <>
            <PersonalDetailsEditor personalDetails={stateManager.personalDetails} setPersonalDetails={stateManager.setPersonalDetails}></PersonalDetailsEditor>
        </>
    )


}