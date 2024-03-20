import React, { useState } from 'react';
import GoggleLogo from '../assets/goggle-logo.svg'
import AppleLogo from '../assets/apple-logo.svg'
import VerticalLine from '../assets/line.svg'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface FormModel {
    usernameOrEmail: string;
    password: string;
}
const initialValues = {
    usernameOrEmail: "",
    password: "",
}
const onSubmit = (values: FormModel) => {
    console.log('form data', values)
}
const validate = (values: FormModel) => {
    let errors: Partial<FormModel> = {}
    if (!values.usernameOrEmail) {
        errors.usernameOrEmail = "Please enter your username or email."
    }else if (!isValidUsernameOrEmail(values.usernameOrEmail)) {
        errors.usernameOrEmail = "Invalid username or email.";
    }
    if (!values.password) {
        errors.password = "Please enter your password."
    } 
    else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    } else if (!/\d/.test(values.password)) {
        errors.password = "Password must contain at least one number.";
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(values.password)) {
        errors.password = "Password must contain at least one lowercase letter.";
    }
    return errors
}
const isValidUsernameOrEmail = (value: string) => {
    // Implement your validation logic here
    // For example, you can use regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/; // Example username regex

    return emailRegex.test(value) || usernameRegex.test(value);
};
const Login:React.FC = () => {
    const formik = useFormik<FormModel>({
        initialValues,
        onSubmit,
        validate, 
    })
    const [open, setOpen] = useState<boolean>(false);
    const toggle = () =>{
        setOpen(!open)
    }
    const authenticationInstance = getAuth();

    const handleSubmit = async () =>{
     await signInWithEmailAndPassword(authenticationInstance, formik.values.usernameOrEmail, formik.values.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            localStorage.setItem('email', JSON.stringify(user.email));
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
  return (
    <>
        <div className='flex flex-col items-center p-16'>
            <h6 className='text-sm text-center font-gilroyMedium'>Log in with:</h6>
            <div className='flex space-x-4 my-4'>
                <button className='bg-tertiary px-4 py-3 text-white font-gilroyMedium'><span className='flex gap-1'><img src={GoggleLogo} />Google</span></button>
                <button className='bg-tertiary px-6 py-3 text-white font-gilroyMedium'><span className='flex items-center justify-center gap-1'><img src={AppleLogo} />Apple</span></button>
            </div>
            <div>
                <div className='flex space-x-4'>
                    <div className='flex items-center'><img src={VerticalLine} alt='line' /></div>
                    <h6 className='text-[#5C6F7F] font-gilroyMedium'>Or</h6>
                    <div className='flex items-center'><img src={VerticalLine} alt='line' /></div>
                </div>
            <form onSubmit={handleSubmit}>
            <div className='grid grid-rows-4 gap-6 mt-10'>
                    <div>
                        <input onChange={formik.handleChange}
                            value={formik.values.usernameOrEmail}
                            onBlur={formik.handleBlur}
                            name="usernameOrEmail" 
                            className={`${formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Email address or username' 
                        />
                        {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail ? <p className=' text-red-600'>{formik.errors.usernameOrEmail}</p> : null}
                    </div>
                <div className='w-full relative'>
                    <input type={(open === false) ? 'password' : 'text'} onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                            autoComplete="off"
                            name="password"  
                            className={`${formik.touched.password && formik.errors.password ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Password'
                     />
                    <div className='text-2xl text-tertiary absolute top-4 right-5'>
                        {(open === false) ? <IoMdEye  onClick={toggle}/>
                        : <IoMdEyeOff onClick={toggle} />}
                    </div>
                    {formik.touched.password && formik.errors.password ? <p className=' text-red-600'>{formik.errors.password}</p> : null}
                </div>
                <p className='text-[#4991FF] font-gilroyMedium text-right text-sm'>Forget your password?</p>
                <div className='-mt-10'>
                    <button onClick={handleSubmit} type='button' className='bg-tertiary text-white w-full py-4 rounded-3xl font-gilroySemiBold text-sm'> Login</button>
                </div>
            </div>
            </form>
                <h6 className='font-gilroyMedium text-[#5C6F7F] text-center text-sm mb-2'>Don’t have an account? <Link to="/sign-up"><span className='text-tertiary'>Sign up</span></Link></h6>
                <p className='text-center font-gilroyMedium text-xs text-[#A0B1C0] mb-1'>By signing in with  an account, you agree to </p>
                <p className='text-center font-gilroyMedium text-xs text-[#5C6F7F] '><span className='text-[#A0B1C0]'>Sciccor's</span> Terms of Service, Privacy Policy <span className='text-[#A0B1C0]'>and</span>  Acceptable Use Policy. </p>
            </div>
            
        </div>
        <Footer/>
    </>
  )
}

export default Login