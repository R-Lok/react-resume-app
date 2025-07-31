export default function BasicInfoDisplay( {personalDetails} ) {

    return (
        <div>
            <h1>{personalDetails.name}</h1>
            <div className='flex justify-evenly'>
                <span>{personalDetails.email}</span>
                <span>{personalDetails.phone}</span>
            </div>
        </div>
    )

}