import React from 'react';
import LogoHeader from '../assets/logo-header.svg';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Nav:React.FC = () => {
  return (
    <nav className='flex justify-between'>
        <div className='flex items-center space-x-1.5'>
            <img src={LogoHeader} alt='logo header'/>
            <div className='h-6 border-2 rounded-md border-primary'></div>
            <h1 className='font-bold text-2xl text-primary font-gilroyBold'>SCISSOR</h1>
        </div>
        <ul className='flex items-center space-x-16 text-lg font-gilroyMedium list-none'>
            <li className='text-primary'><Link to='/url-history'>My URLs</Link></li>
            <li className='flex gap-2'>Features <span className='mt-1'><IoIosArrowDown /></span></li>
            <li>Pricing</li>
            <li>Analytic</li>
            <li>FAQs</li>
        </ul>
        <div className='flex items-center space-x-6'>
            <Link to='/login'><h5 className='text-primary font-gilroySemiBold'>Log in</h5></Link>
            <button className='bg-primary px-6 py-3 rounded-[6.25em] text-white font-gilroySemiBold'>Try for free</button>
        </div>
    </nav>
  )
}

export default Nav