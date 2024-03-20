import React, { useState } from 'react';
import GoggleLogo from '../assets/goggle-logo.svg'
import AppleLogo from '../assets/apple-logo.svg'
import VerticalLine from '../assets/line.svg'
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {authenticationInstance} from '../utils/Firebase'

interface FormModel {
    username: string;
    email: string;
    password: string;
    retypePassword: string;
}
const initialValues = {
    username: "",
    email: "",
    password: "",
    retypePassword: "",
}
const onSubmit = (values: FormModel) => {
    console.log('form data', values)
}
const validate = (values: FormModel) => {
    let errors: Partial<FormModel> = {}
    if (!values.username) {
        errors.username = "Please enter your username."
    }
    if (!values.email) {
        errors.email = "Please enter your email address."
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email format"
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
    if (!values.retypePassword) {
        errors.retypePassword = "Please retype your password.";
    } else if (values.retypePassword !== values.password) {
        errors.retypePassword = "Passwords do not match.";
    }
    return errors
}
const SignUp:React.FC = () => {
    const formik = useFormik<FormModel>({
        initialValues,
        onSubmit,
        validate, 
    })
    const [openPassword, setOpenPassword] = useState<boolean>(false);
    const [openRetypePassword, setOpenRetypePassword] = useState<boolean>(false);
    const togglePassword = () =>{
        setOpenPassword(!openPassword)
    }
    const toggleRetypePassword = () =>{
        setOpenRetypePassword(!openRetypePassword);
    }
    const handleSubmit = async () =>{
        await createUserWithEmailAndPassword(authenticationInstance, formik.values.email, formik.values.password).then(()=> console.log("successfully created") )
        
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
                  <div className='grid grid-rows-5 gap-6 mt-10'>
                        <div>
                            <input onChange={formik.handleChange}
                                value={formik.values.username}
                                onBlur={formik.handleBlur} 
                                type='text' 
                                name='username' 
                                className={`${formik.touched.username && formik.errors.username ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Username'
                             />
                            {formik.touched.username && formik.errors.username ? <p className='text-red-600'>{formik.errors.username}</p> : null}
                        </div>
                        <div>
                            <input onChange={formik.handleChange}
                                value={formik.values.email}
                                onBlur={formik.handleBlur} 
                                type='email'
                                name='email'
                                className={`${formik.touched.email && formik.errors.email ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Email'
                            />
                            {formik.touched.email && formik.errors.email ? <p className=' text-red-600'>{formik.errors.email}</p> : null}
                        </div>
                        <div className='w-full relative'>
                            <input onChange={formik.handleChange}
                                 value={formik.values.password}
                                onBlur={formik.handleBlur} 
                                type={(openPassword === false) ? 'password' : 'text'} name='password'
                                autoComplete='new-password'
                                className={`${formik.touched.password && formik.errors.password ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Password'
                             />
                            <div className='text-2xl text-tertiary absolute top-4 right-5'>
                                {(openPassword === false) ? <IoMdEye  onClick={togglePassword}/>
                                : <IoMdEyeOff onClick={togglePassword} />}
                            </div>
                            {formik.touched.password && formik.errors.password ? <p className=' text-red-600'>{formik.errors.password}</p> : null}
                        </div>
                        <div className='w-full relative'>
                            <input 
                                onChange={formik.handleChange}
                                value={formik.values.retypePassword}
                                onBlur={formik.handleBlur}
                                type={(openRetypePassword === false) ? 'password' : 'text'}
                                autoComplete="new-password"
                                name='retypePassword' 
                                className={`${formik.touched.retypePassword && formik.errors.retypePassword ? 'border-red-500 border-solid border-2 rounded-md' : null} border-2 border-tertiary rounded-md w-full py-3 px-4 placeholder:font-gilroyMedium placeholder:text-[#A0B1C0]`} placeholder='Retype Password' />
                            <div className='text-2xl text-tertiary absolute top-4 right-5'>
                                {(openRetypePassword === false) ? <IoMdEye  onClick={toggleRetypePassword}/>
                                : <IoMdEyeOff onClick={toggleRetypePassword} />}
                            </div>
                            {formik.touched.retypePassword && formik.errors.retypePassword ? <p className=' text-red-600'>{formik.errors.retypePassword}</p> : null}
                        </div>
                        <p className='text-[#A0B1C0] font-gilroyMedium text-xs'>6 or more characters, one number, one uppercase &amp; one lower case.</p>
                        <div>
                            <button onClick={handleSubmit} type='button' className='bg-tertiary text-white w-full py-4 rounded-3xl font-gilroySemiBold text-sm'> Sign up with email</button>
                        </div>
                  </div>
                </form>
                <h6 className='font-gilroyMedium text-[#5C6F7F] text-center text-sm my-3'>Already have an account?   <Link to="/login"><span className='text-tertiary'>Log in</span></Link></h6>
                <p className='text-center font-gilroyMedium text-xs text-[#A0B1C0] mb-1'>By signing up, you agree to </p>
                <p className='text-center font-gilroyMedium text-xs text-[#5C6F7F] '><span className='text-[#A0B1C0]'>Sciccor's</span> Terms of Service, Privacy Policy <span className='text-[#A0B1C0]'>and</span>  Acceptable Use Policy. </p>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default SignUp