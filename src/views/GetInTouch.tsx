import React from 'react'
import Nav from '../components/Nav'

const GetInTouch:React.FC = () => {
  return (
    <div>
        <div className='bg-[url(./assets/get-in-touch-bg.png)] bg-cover max-h-fit pb-10'>
            <div className='bg-[url(./assets/get-in-t-icons.png)] bg-cover max-h-fit pb-10'>
                <div className='px-24 py-5 text-[#141414]'>
                    <Nav/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className='text-[#071827] font-gilroyBold text-[2.5rem] text-center mt-6'>Let's get in touch</h2>
                    <div className='w-[570px] bg-[#CBD6E0] rounded-lg pt-24 px-10 pb-16'>
                        <div className='grid grid-rows-8 gap-4'>
                                <div className='grid grid-cols-2 gap-4'>
                                    <label className='font-gilroyMedium'>
                                        First Name*
                                        <input type='text' className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-2 mt-1' />
                                    </label>
                                    <label className='font-gilroyMedium'>
                                        Last Name*
                                        <input type='text' className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-2 mt-1' />
                                    </label>
                                </div>
                                <label className='font-gilroyMedium'>
                                    Company Name*
                                    <input type='text' className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-2 mt-1' />
                                </label>
                                <label className='font-gilroyMedium'>
                                    Business Email Address*
                                    <input type='text' className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-2 mt-1' />
                                </label>  
                                <label className='font-gilroyMedium'>
                                    Phone Number*
                                    <input type='text' className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-2 mt-1' />
                                </label>
                                <div className='font-gilroyMedium'>
                                    <h4>Job Title*</h4>
                                    <select className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-3 mt-1 text-sm'>
                                        <option disabled>Please Select</option>
                                        <option>Software Engineer</option>
                                        <option>Data Analyst</option>
                                        <option>IT Specialist</option>
                                    </select>
                                </div>
                                <div className='font-gilroyMedium'>
                                    <h4>Company Size*</h4>
                                    <select className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-3 mt-1 text-sm'>
                                        <option disabled>Please Select</option>
                                        <option>1-10</option>
                                        <option>11-55</option>
                                        <option>56-100</option>
                                    </select>
                                </div>
                                <div className='font-gilroyMedium'>
                                    <h4>Primary Use Case*</h4>
                                    <select className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-3 mt-1 text-sm'>
                                        <option disabled>Please Select</option>
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                                <div className='font-gilroyMedium'>
                                    <h4>Country*</h4>
                                    <select className='w-full rounded-xl border-[1px] border-[#CBD6E0] bg-white py-3 mt-1 text-sm'>
                                        <option disabled>Please Select</option>
                                        <option>Nigeria</option>
                                        <option>United State</option>
                                        <option>United Kingdom</option>
                                    </select>
                                </div>
                               <h6 className='text-[#5C6F7F] text-xs font-proximaNova'>Scissor requires the contact information you provide in order to reach out to you regarding our products and services. You have the option to unsubscribe from these communications whenever you wish. To learn more about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please refer to our Privacy Policy.</h6>
                               <button className='bg-tertiary text-white w-full py-3 rounded-3xl font-gilroySemiBold text-sm'> Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch