export function BasicInfoDisplay( {personalDetails} ) {

    const style = {
        display: 'block'
    }

    return (
        <div>
        {Object.entries(personalDetails).map(([key, val]) => (
            <div key={key} style={style}>
                <h4>
                    {key.toUpperCase()}
                </h4>
                <div>
                    {val}
                </div>
            </div>
        ))}
        
        </div>
    )

}