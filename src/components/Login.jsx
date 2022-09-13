import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";
import logoImg from '../assets/logo.png'
import './landing.css';

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
        authenticateUser();
    }

    //Handle Login API Integration here
    const authenticateUser = () =>{
        console.log(loginState)
        if(loginState['email-address'] == 'test@email.com' && loginState.password == 'Password123!') {
		    localStorage.setItem("user", JSON.stringify({role: "ADMIN"}))
            navigate("/dashboard");
        }
        else {
            alert('Invalid Credentials')
        }
    }
    
    return (
        <div className='w-full h-screen landing-body'>
            <div className='flex justify-center items-center h-full'>
                <form
                    className='justify-center items-center x-auto p-10 max-w-[950px]'
                    onSubmit={handleSubmit}
                >
                    <div className="flex items-center max-w-[950px] bg-white-1 justify-items-center">
                        <img src={logoImg} alt="/" />
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
                        <FormAction customClass="rounded-lg mt-10" handleSubmit={handleSubmit} text="LOG IN"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
