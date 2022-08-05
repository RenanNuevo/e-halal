import React from 'react';
import { AiFillFacebook, AiOutlineMail } from 'react-icons/ai'

const fixedInputClass="appearance-none relative block w-full px-3 py-3 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass,
    icon,
}){
    return(
        <div className="my-3">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <div className="rounded flex border border-amber-400">
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
            {icon && icon}
            </div>

          </div>
    )
}