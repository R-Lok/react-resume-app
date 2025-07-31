import {useState} from 'react'
import EditorEducationForm from './EditorEducationForm'

export default function EditorExperienceItem({ experience, index, removeElement, editElement, isShown }) {

    const [isShowDetails, setShowDetails] = useState(isShown)

    return (
        <div>
            <button onClick={() => {setShowDetails(!isShowDetails)}}>{experience.name}</button>
            <button onClick={() => { removeElement(index) }}> ❌ </button>

            {isShowDetails ? <EditorEducationForm experience={experience} index={index} editElement={editElement}></EditorEducationForm>: null}
        </div>
    )
}