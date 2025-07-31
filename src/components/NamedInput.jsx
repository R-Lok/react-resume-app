export default function NamedInput( {id, fieldName, currentValue, setter, inputType} ) {

    const labelStyle = {
        'display': 'block'
    }


    return (
        <div>
            <label htmlFor={id} style={labelStyle}>{fieldName}</label>
            <input 
            id={id} 
            type={inputType} 
            value={currentValue} 
            onChange={e => setter(e.target.value)}
            />
        </div>
    )
}