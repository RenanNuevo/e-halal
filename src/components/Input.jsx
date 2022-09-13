import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

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
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
      console.log(showPassword)
      setShowPassword(!showPassword);
    };

    return(
        <div className="my-3 rounded border-amber-400">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <div className="rounded flex border border-amber-400   justify-center">
              <input
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type === 'password' ? (showPassword ? "text" : "password") : type}
                required={isRequired}
                className={fixedInputClass+customClass}
                placeholder={placeholder}
              />
              {type === 'password' ?
                <span className='p-3 bg-white cursor-pointer' onClick={() => handleClickShowPassword()}>
                  {showPassword ? 
                    <AiFillEye
                      fill="#bcbcbc"
                      size="30"
                      color="white"
                    /> :
                    <AiFillEyeInvisible
                      fill="#bcbcbc"
                      size="30"
                      color="white"
                    />
                  }
                </span>
                : ""
              }
              {icon && <div className='bg-amber-400 p-2'>{icon}</div>}
            </div> 
          </div>
    )
}
