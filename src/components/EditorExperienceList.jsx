export default function EditorExperienceList({ experiences, removeElement}) {

    return (
        <div>
            {experiences.map((element, index) => (
                <div key={element.name}>
                    <span>{element.name}</span>
                    <button onClick={() => {removeElement(index)}}> Delete </button>
                </div>
            ))}
        </div>
    )
}