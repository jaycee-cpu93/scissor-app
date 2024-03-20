import React from 'react';
import Nav from '../components/Nav';
import Line from '../assets/vertical-line.svg'
import RuggedTriangle from '../assets/rugged-triangle.svg';
import LinkStraight from '../assets/link-straight.svg';
import LongArrow from '../assets/long-arrow.svg';
import TrapeziumShape from '../assets/trapezium.svg';
import EllipseShape from '../assets/ellipse.svg';
import GradientLine from '../assets/gradient-line.svg';
import UrlLink from '../assets/url-link.svg';
import EditButton from '../assets/edit-button.svg';
import QrCodeButton from '../assets/qrcode.svg';
import SignalButton from '../assets/signal-analytic.svg';
import MarkedButton from '../assets/mark.svg';
import WhiteMarkedButton from '../assets/white-mark.svg';
import TrimUrlForm from '../components/TrimUrlForm';
import Faqs from '../components/Faqs';
import VectorShapeTwelve from '../assets/vector-shape-twelve.png';
import VectorShapeThirteen from '../assets/vector-shape-thirteen.png';
import VectorShapeFourteen from '../assets/vector-shape-fourteen.png';
import VectorShapeFifteen from '../assets/vector-shape-fifteen.png';
import VectorShapeSixteen from '../assets/vector-shape-sixteen.png';
import VectorShapeSeventeen from '../assets/vector-shape-seventeen.png';
import Footer from '../components/Footer';
import { Link} from 'react-router-dom';



const Homepage:React.FC = () => {
  return (
    <>
        <div className='px-24 py-5 text-[#141414]'>
            <Nav />
            <div className='text-center px-24 pt-24 font-gilroyBold font-semibold text-5xl space-y-10'>
                <h2>Optimize Your Online Experience with Our</h2>
                <h2>Advanced <span className='text-primary'>URL Shortening</span> Solution</h2>
            </div>
            <div className='flex justify-center'>
                <img src={Line} alt="line"  />
            </div>
            <div className='text-lg font-gilroyMedium px-60 py-4 text-center'>
                <p>Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.</p>
            </div>
            <div className='flex space-x-12 justify-center items-center'>
                <Link to='/sign-up'><button className='bg-primary px-6 py-3 rounded-[6.25em] text-white font-gilroySemiBold'>Sign up</button></Link>
                <h5 className='text-primary font-gilroySemiBold'>Learn More</h5>
            </div>
            <div className='flex space-y-14 justify-center'>
                <img src={RuggedTriangle} alt='rugged triangle' className='-mr-32 mt-8'/>
                <div className='w-[31.5em] border-[0.063em] bg-[#FEFEFE] rounded-[1.5em] border-primary py-10 px-[3.75em]'>
                    <div className='flex'>
                        <div className='flex'>
                            <img src={LinkStraight} alt='Link straight' className='-mr-2' />
                            <img src={LinkStraight} alt='Link straight' className='-mr-2' />
                            <img src={LinkStraight} alt='Link straight' className='mr-6' />
                        </div>
                        <div className='flex space-x-6'>
                            <img src={LongArrow} alt='long arrow'/>
                            <img src={LinkStraight} alt='Link straight' />
                        </div>
                    </div>
                    <p className='text-center font-gilroyMedium mt-3 leading-6'>Seamlessly transform your long URLs into concise and <span className='font-gilroySemiBold'>shareable links</span> with just few clicks.</p>
                </div>
            </div>
        </div>
        <div className='flex mt-14'>
            <img src={TrapeziumShape} alt='big trapzium' />
            <img src={EllipseShape} alt='ellipse' className='-ml-[1100px]' />
        </div>
        <div className='flex px-28 space-x-20 bg-[#F9FBFD] py-10 text-[#141414]'>
                <div>
                    <h2 className='font-gilroyBold text-[2.5rem]'>One Stop.</h2>
                    <h2 className='font-gilroyBold text-[2.5rem] text-primary'>Four Possibilities.</h2>
                </div>
                <div>
                    <h2 className='font-gilroySemiBold text-[2rem]'>3M</h2>
                    <p className='font-gilroyMedium'>Active users </p>
                </div>
                <div>
                    <h2 className='font-gilroySemiBold text-[2rem]'>60M</h2>
                    <p className='font-gilroyMedium className w-[7.69em]'>Links &amp; QR codes created</p>
                </div>
                <div>
                    <h2 className='font-gilroySemiBold text-[2rem]'>1B</h2>
                    <p className='font-gilroyMedium w-[9.25em]'>Clicked &amp; Scanned connections</p>
                </div>
                <div>
                    <h2 className='font-gilroySemiBold text-[2rem]'>300k</h2>
                    <p className='font-gilroyMedium'>App Integrations</p>
                </div>     
        </div>
        <div className='px-24 py-20 grid grid-cols-2 text-[#141414]'>
            <div className='col-span-1 row-start-1 row-end-2'>
                <div className='flex gap-2'>
                    <img src={GradientLine} alt="gradient line" />
                    <h2 className='font-gilroyBold text-[2.5rem]'>Why choose <span className='text-primary'>Scissors</span></h2>
                </div>
                <div className='w-[23.12em] pl-6'>
                    <p>Scissors is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p>
                </div>
           </div>
            <div className="grid grid-cols-2 gap-14">
                <div>
                    <div className='bg-[#3284FF] bg-opacity-[13%] w-14 h-14 rounded-full flex justify-center items-center'>
                        <img src={UrlLink} alt='url or link'/>
                    </div>
                    <h3 className='font-gilroySemiBold text-[2rem] mt-6'>URL Shortening</h3>
                    <p className='font-gilroyMedium w-[21.25em]'>Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div>
                    <div className='bg-[#3284FF] bg-opacity-[13%] w-14 h-14 rounded-full flex justify-center items-center'>
                        <img src={EditButton} alt='edit button'/>
                    </div>
                    <h3 className='font-gilroySemiBold text-[2rem] mt-6'>Custom URLs</h3>
                    <p className='font-gilroyMedium w-[21.25em]'>With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                </div>
                <div>
                    <div className='bg-[#3284FF] bg-opacity-[13%] w-14 h-14 rounded-full flex justify-center items-center'>
                        <img src={QrCodeButton} alt='url or link'/>
                    </div>
                    <h3 className='font-gilroySemiBold text-[2rem] mt-6'>QR Codes</h3>
                    <p className='font-gilroyMedium w-[21.25em]'>Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div>
                    <div className='bg-[#3284FF] bg-opacity-[13%] w-14 h-14 rounded-full flex justify-center items-center'>
                        <img src={SignalButton} alt='url or link'/>
                    </div>
                    <h3 className='font-gilroySemiBold text-[2rem] mt-6'>Data Analytics</h3>
                    <p className='font-gilroyMedium w-[21.25em]'>Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center space-y-1 text-[#141414]'>
            <div className='flex gap-2 '>
                <img src={GradientLine} alt="gradient line" />
                <h2 className='font-gilroyBold text-[2.5rem]'>A <span className='text-primary'> price perfect</span> for your needs.</h2>
            </div>
            <p className='w-[34.75em] text-center'>From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
        </div>
        <div className='flex text-[#141414] my-8 justify-center'>
            <div className='rounded-tl-xl rounded-bl-xl border-[0.03em] border-primary w-[23.69em] h-[33em] mt-14 p-20'>
                <h4 className='font-gilroyMedium text-2xl'>Basic</h4>
                <h2 className='font-gilroyBold text-[2.5rem] my-3'>Free</h2>
                <h5 className='font-gilroyMedium text-xl'>Free plan for all users</h5>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Unlimited URL Shortening</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Basic Link Analytics</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Customizable Short Links</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Standard Support</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Ad-supported</p>
                </div>
            </div>
            <div className='rounded-xl border-[0.03em] bg-[#1E3448] w-[25.7em] h-[40em] p-20 text-white'>
                <h4 className='font-gilroyMedium text-2xl'>Professional</h4>
                <h2 className='font-gilroyBold text-[2.5rem] my-3'>$15/month</h2>
                <h5 className='font-gilroyMedium text-xl'>Ideal for business creators</h5>
                <div className='flex gap-2'>
                    <img src={WhiteMarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Enhanced Link Analytics</p>
                </div>
                <div className='flex gap-2'>
                    <img src={WhiteMarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Custom Branded Domains</p>
                </div>
                <div className='flex gap-2'>
                    <img src={WhiteMarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Advanced Link Customization</p>
                </div>
                <div className='flex gap-2'>
                    <img src={WhiteMarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Priority Support</p>
                </div>
                <div className='flex gap-2'>
                    <img src={WhiteMarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Ad-free Experience</p>
                </div>
            </div>
            <div className='rounded-tr-xl rounded-br-xl border-[0.03em] border-primary w-[23.69em] h-[33em] mt-14 p-[80px]'>
                <h4 className='font-gilroyMedium text-2xl'>Teams</h4>
                <h2 className='font-gilroyBold text-[2.5rem] my-2'>$25/month</h2>
                <h5 className='font-gilroyMedium text-xl w-full'>Share with up to 10 users</h5>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Team Collaboration</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>User Roles and Permissions</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Enhanced Security</p>
                </div>
                <div className='flex gap-2'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>API Access</p>
                </div>
                <div className='flex gap-[0.38em]'>
                    <img src={MarkedButton} alt="mark sign" />
                    <p className='text-sm font-gilroyMedium my-4'>Dedicated Account Manager</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center space-x-6 my-16'>
            <button className='border-[0.0625em] border-primary border-solid px-6 py-3 rounded-[6.25em] text-primary font-gilroySemiBold'>Get Custom Pricing</button>
            <button className='bg-primary px-10 py-3 rounded-[6.25em] text-white font-gilroySemiBold'>Select Pricing</button>
        </div>
        <TrimUrlForm />
        <Faqs />
        <div className='bg-[#1E3448] w-full relative'>
            <div className='left-0 absolute'>
                <img src={VectorShapeTwelve} alt='vector shape twelve' />
            </div>
            <div className='left-0 absolute'>
                <img src={VectorShapeThirteen} alt='vector shape thirteen' />
            </div>
            <div className='left-0 absolute'>
                <img src={VectorShapeFourteen} alt='vector shape fourteen' />
            </div>
            <div className='flex flex-col items-center py-24 space-y-10'>
                <h2 className=' text-[2.5rem] text-[#FFFFFF] font-gilroyBold'>Revolutionizing Link Optimization</h2>
                <button className='bg-primary px-10 py-3 rounded-[6.25em] text-white font-gilroySemiBold'>Get Started</button>   
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeFifteen} alt='vector shape fifteen' />
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeSixteen} alt='vector shape sixteen' />
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeSeventeen} alt='vector shape seventeen' />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Homepage