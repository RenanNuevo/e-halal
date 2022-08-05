import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgotPasswordField } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

import loginImg from '../assets/bg.png'

const fields=forgotPasswordField;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

export default function Login2() {
    const [loginState,setLoginState]=useState(fieldsState);
    const navigate = useNavigate();

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
        console.log(loginState)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser(e);
    }

    const authenticateUser = () =>{
        console.log(loginState)
        if(loginState.otp == '123456') {
            navigate("/reset-password");
        }
        else {
            alert('Incorrect OTP')
        }
    }
    
    return (
        <div className='relative w-full h-screen bg-zinc-900/200'>
            <img className='absolute w-full h-full object-cover mix-blend-lighten' src={loginImg} alt="/" />
        <div className='flex justify-center items-center h-full   shadow-gray-600'>
            <form
                className='justify-center items-center x-auto shadow-lg rounded-3xl bg-white p-10 min-w-[950px]'
                onSubmit={handleSubmit}
            >

                <div className="place-content-center font-bold mb-8 p-4  max-w-[750px]">
                    <p className='text-3xl mb-10'>Forgot Password</p>
                    <div className='flex justify'>
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
                                customClass="self-center min-w-[420px]"
                                icon={field.icon}
                            />
                        )
                    }
                    <p className='flex align-self-end ml-20 min-w-[420px]'>Please enter OTP send on this email *******abc@gmail.com</p>

                    </div>
                    <FormAction customClass="self-center max-w-[420px] rounded-lg" handleSubmit={handleSubmit} text="CONFIRM OTP"/>
                </div>
            </form>
        </div>
        </div>
    )
}
