import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'

function InputPrice({reference}) {
    return (
        <InputGroup className="mb-3" >
            <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl ref={reference}/>
            <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
        </InputGroup>
    )
}

export default InputPrice
