import { MdLock } from 'react-icons/md'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'

const loginFields=[
    {
        labelText:"Email",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email",
        icon: <HiOutlineMail
            enableBackground={true}
            fill="#ba9644"
            size="60"
            color="white"
        />
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
        icon: <HiOutlineLockClosed
            enableBackground={true}
            fill="white"
            size="60"
            color="#ba9644"
        />
    }
]

const forgotPasswordField=[
    {
        labelText:"OTP",
        labelFor:"otp",
        id:"otp",
        name:"otp",
        type:"text",
        isRequired:true,
        placeholder:"Enter OTP"
    }
]

const confirmChangePasswordField=[
    {
        labelText:"mobile",
        labelFor:"mobile",
        id:"mobile",
        name:"mobile",
        type:"text",
        isRequired:true,
        placeholder:"Enter Phone Number"
    }
]

const resetPasswordFields=[
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password",
        icon: <HiOutlineLockClosed
            enableBackground={true}
            fill="white"
            size="60"
            color="#ba9644"
        />
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password",
        icon: <HiOutlineLockClosed
            enableBackground={true}
            fill="white"
            size="60"
            color="#ba9644"
        />
    }
]

const signupFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    }
]

export { loginFields,signupFields, forgotPasswordField, resetPasswordFields, confirmChangePasswordField}