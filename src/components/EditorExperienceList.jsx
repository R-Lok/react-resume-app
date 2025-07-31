import EditorExperienceItem from "./EditorExperienceItem"

export default function EditorExperienceList({ experiences, removeElement, editElement}) {

    return (
        <div>
            {experiences.map((element, index) => (
                <EditorExperienceItem key={element.id} experience={element} index={index} removeElement={removeElement} editElement={editElement}></EditorExperienceItem>
            ))}
        </div>
    )
}