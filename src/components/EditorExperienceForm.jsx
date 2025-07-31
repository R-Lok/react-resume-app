import NamedInput from './NamedInput'

export default function EditorExperienceForm({ experience, index, editElement }) {


    //Can refactor these all into one function later, just specify what field being changed
    function setTitle(name) {
        editElement(index, { ...experience, name })
    }

    function setInstitution(location) {
        editElement(index, {...experience, location})
    }

    function setStartDate(startDate) {
        editElement(index, {...experience, startDate})
    }

    function setEndDate(endDate) {
        editElement(index, {...experience, endDate})
    }
    
    function setDescription(description) {
        editElement(index, {...experience, description})
    }

    return (
        <div>
            <NamedInput
                id={experience.id}
                fieldName={experience.type.toLowerCase() === 'education' ? "Program" : "Job Title"}
                currentValue={experience.name}
                inputType='text'
                setter={setTitle}>
            </NamedInput>
            <NamedInput
                id={experience.id}
                fieldName={experience.type.toLowerCase() === 'education' ? "School" : "Company"}
                currentValue={experience.location}
                inputType='text'
                setter={setInstitution}>
            </NamedInput>
            <NamedInput
                id={experience.id}
                fieldName='Start Date'
                currentValue={experience.startDate}
                inputType='date'
                setter={setStartDate}>
            </NamedInput>
            <NamedInput
                id={experience.id}
                fieldName='End Date'
                currentValue={experience.endDate}
                inputType='date'
                setter={setEndDate}>
            </NamedInput>
            <NamedInput
                id={experience.id}
                fieldName='Description'
                currentValue={experience.description}
                inputType='textarea'
                setter={setDescription}>
            </NamedInput>
        </div>
    )
}