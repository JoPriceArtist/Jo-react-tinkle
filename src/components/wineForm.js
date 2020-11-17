import React, { useState } from 'react';

const WineForm = (props) => {
    const [name, setName] = useState('')
    const [variety, setVariety] = useState('')
    const [colour, setColour] = useState('')

    const buttonClicked = (e) => {
        console.log('i was clicked')
        props.handleClick({ name, variety, colour })

    }
    return (<div>
    <div><input onChange={(e) => setName(e.target.value)} value={name} type='text' /></div>
    <div><input onChange={(e) => setVariety(e.target.value)} value={variety} type='text' /></div>
    <div><input onChange={(e) => setColour(e.target.value)} value={colour} type='text' /></div>
    {name.length > 15 && <div>not a valid name</div>}
    <button disabled={name.length > 15} onClick={buttonClicked}>Add Wine</button>
    </div>);
}

export default WineForm;