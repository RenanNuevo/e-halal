import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPasswordFields } from "../constants/formFields";
import FormAction from "./FormAction";
import Input from "./Input";
import './landing.css';

import loginImg from '../assets/bg.png'

const fields=resetPasswordFields;
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
        if(loginState.password == loginState['confirm-password']) {
            navigate("/confirm-change-password");
        }
        else {
            alert('Password did"nt matched')
        }
    }
    
    return (
        <div className='relative w-full h-screen landing-body'>
        <div className='flex justify-center items-center h-full'>
            <form
                className='justify-center items-center x-auto shadow-lg rounded-3xl bg-white p-10 min-w-[950px]'
                onSubmit={handleSubmit}
            >
                <div className='flex inline-block justify-center items-center'>
                <div className="place-content-center font-bold mb-8 p-4  max-w-[750px]">
                    <p className='text-3xl mb-10'>Change your Password</p>
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
                    <FormAction customClass="self-center max-w-[480px]" handleSubmit={handleSubmit} text="CHANGE PASSWORD"/>
                </div>
                <ul className='self-center -mt-20'>
                    <li className='ml-20 min-w-[420px] font-bold' >Password must contain:</li>
                    <li className='ml-20 min-w-[420px]'>Atleast 1 upper case letter (A-Z)</li>
                    <li className='ml-20 min-w-[420px]'>Atleast 1 number (0-9)</li>
                    <li className='ml-20 min-w-[420px]'>Atleast 8 characters</li>
                </ul>
                

                </div>
            </form>
        </div>
        </div>
    )
}
