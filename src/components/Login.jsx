import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

import loginImg from '../assets/bg.png'
import logoImg from '../assets/logo.png'

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login2() {
    const [loginState,setLoginState]=useState(fieldsState);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser(e);
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        console.log(loginState)
        if(loginState['email-address'] == 'test@email.com' && loginState.password == 'Password123!') {
            navigate("/dashboard");
        }
        else {
            alert('Invalid Credentials')
        }
    }
    
    return (
        <div className='relative w-full h-screen bg-zinc-900/200'>
            <img className='absolute w-full h-full object-cover mix-blend-lighten' src={loginImg} alt="/" />
        <div className='flex justify-center items-center h-full  shadow-lg shadow-gray-600'>
            <form
                className='justify-center items-center x-auto p-10 max-w-[950px]'
                onSubmit={handleSubmit}
            >
                <div className="flex items-center max-w-[950px] bg-white-1 justify-items-center">
                    <img className="mix-blend-lighten" src={logoImg} alt="/" />
                </div>
                <div className="grid place-content-center font-bold mb-8 p-4 ">
                    {
                        fields.map(field=>
                                <Input
                                    key={field.id}
                                    handleChange={handleChange}
                                    value={loginState[field.id]}
                                    labelText={field.labelText}
                                    labelFor={field.labelFor}
                                    id={field.id}
                                    name={field.name}
                                    type={field.type}
                                    isRequired={field.isRequired}
                                    placeholder={field.placeholder}
                                    customClass="self-center min-w-[450px]"
                                    icon={field.icon}
                            />
                        
                        )
                    }
                    <FormExtra/>
                    <FormAction handleSubmit={handleSubmit} text="LOG IN"/>
                </div>
            </form>
        </div>
        </div>
    )
}
