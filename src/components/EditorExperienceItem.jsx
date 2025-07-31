import {useState} from 'react'
import EditorExperienceForm from './EditorExperienceForm'

export default function EditorExperienceItem({ experience, index, removeElement, editElement, isShown }) {

    const [isShowDetails, setShowDetails] = useState(isShown)

    return (
        <div>
            <button onClick={() => {setShowDetails(!isShowDetails)}}>{experience.name}</button>
            <button onClick={() => { removeElement(index) }}> ❌ </button>

            {isShowDetails ? <EditorExperienceForm experience={experience} index={index} editElement={editElement}></EditorExperienceForm>: null}
        </div>
    )
}