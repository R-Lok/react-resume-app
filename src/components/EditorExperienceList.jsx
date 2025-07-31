import EditorExperienceItem from "./EditorExperienceItem"

export default function EditorExperienceList({ experiences, removeElement, editElement}) {

    return (
        <div className='flex flex-col gap-2'>
            {experiences.map((element, index) => (
                <EditorExperienceItem key={element.id} experience={element} index={index} removeElement={removeElement} editElement={editElement}></EditorExperienceItem>
            ))}
        </div>
    )
}