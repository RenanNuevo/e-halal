import React, { useState } from 'react';

const Switch = (props) => {

    const [status, setStatus] = useState(props.status || false);

    const handleSetStatus = () => {
        setStatus(!status);
        props.onChangeHandler();
    }

    return (
        <label htmlFor='toggle-switch' className='flex'>
            <input type="checkbox" id="toggle-switch" onChange={handleSetStatus}
                className="cursor-pointer h-8 w-20 rounded-full 
                appearance-none bg-white bg-opacity-5 
                border border-white transition duration-200 relative mr-2"
            />
            <p>{status ? "Enabled" : "Disabled"}</p>
        </label>
    )
}

export default Switch;
