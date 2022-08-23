import React from 'react';

export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text,
    customClass
}){
    const fixedInputClass="group relative w-full flex justify-center py-4 px-4 border border-transparent text-2xl font-lg rounded-md  text-white bg-green-800 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-10"
    
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className={fixedInputClass+customClass}
                onSubmit={handleSubmit}
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}