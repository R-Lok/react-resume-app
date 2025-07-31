export default function NamedInput({ id, fieldName, currentValue, setter, inputType }) {

    const labelStyle = {
        'display': 'block'
    }


    return (
        <div>
            <label htmlFor={id} style={labelStyle}>{fieldName}</label>
            {
                inputType === 'textarea' ? 
                    (<textarea id={id} value={currentValue} onChange={e => setter(e.target.value)}>

                    </textarea>)
                :
                    (<input
                        id={id}
                        type={inputType}
                        value={currentValue}
                        onChange={e => setter(e.target.value)}
                    />)
            }

        </div>
    )
}