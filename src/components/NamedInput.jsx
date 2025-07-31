export default function NamedInput({ id, fieldName, currentValue, setter, inputType }) {

    const labelStyle = {
        'display': 'block',
        'fontWeight': 'bold'
    }

    const inputBorder = {
        'border': '1px solid white',
        'borderRadius': '10px',
        'padding': '5px' 
    }
    


    return (
        <div>
            <label htmlFor={id} style={labelStyle}>{fieldName}</label>
            {
                inputType === 'textarea' ? 
                    (<textarea style={inputBorder} id={id} value={currentValue} onChange={e => setter(e.target.value)}>

                    </textarea>)
                :
                    (<input
                        style={inputBorder}
                        id={id}
                        type={inputType}
                        value={currentValue}
                        onChange={e => setter(e.target.value)}
                    />)
            }

        </div>
    )
}