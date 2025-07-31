export default function ExperienceDetailsDisplay({ experienceType, experiences }) {

    return (
        <div>
            <div className="font-bold text-2xl text-left">{experienceType}</div>
            {experiences.map(element => {

                const startDate = new Date(element.startDate);
                const formattedStartDate = `${startDate.toLocaleString('default', { month: 'short' })} ${startDate.getFullYear()}`;

                const endDate = new Date(element.endDate);
                const formattedEndDate = `${endDate.toLocaleString('default', { month: 'short' })} ${endDate.getFullYear()}`;

                return (
                    <div key={element.id} className='text-left'>
                        <div className='font-bold flex justify-between'>
                            <span>{element.name}</span>
                            <span>{formattedStartDate + "-" + formattedEndDate}</span>
                        </div>
                        <div>
                            {element.location}
                        </div>
                        <p className="whitespace-pre-line break-words">
                            {element.description}
                        </p>
                    </div>
                )
            })}
        </div>

    )
}