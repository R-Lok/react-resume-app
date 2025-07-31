import NamedInput from './NamedInput'

export default function EditorEducationForm({ experience, index, editElement }) {


    //Can refactor these all into one function later, just specify what field being changed
    function setProgramName(name) {
        editElement(index, { ...experience, name })
    }

    function setSchool(location) {
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
                id={'programName-' + { index }}
                fieldName='Program'
                currentValue={experience.name}
                inputType='text'
                setter={setProgramName}>
            </NamedInput>
            <NamedInput
                id={'schoolName-' + { index }}
                fieldName='School'
                currentValue={experience.location}
                inputType='text'
                setter={setSchool}>
            </NamedInput>
            <NamedInput
                id={'schoolStart-' + { index }}
                fieldName='Start Date'
                currentValue={experience.startDate}
                inputType='date'
                setter={setStartDate}>
            </NamedInput>
            <NamedInput
                id={'schoolEnd-' + { index }}
                fieldName='End Date'
                currentValue={experience.endDate}
                inputType='date'
                setter={setEndDate}>
            </NamedInput>
            <NamedInput
                id={'schoolDescription-' + { index }}
                fieldName='Description'
                currentValue={experience.description}
                inputType='textarea'
                setter={setDescription}>
            </NamedInput>
        </div>
    )
}