import React from 'react'
import FooterLogo from '../assets/footer-logo.svg';
import TwitterLogo from '../assets/twitter.svg';
import InstagramLogo from '../assets/instagram.svg';
import LinkedinLogo from '../assets/linkedin.svg';
import FacebookLogo from '../assets/facebook.svg';
import VectorShapeEighteen from '../assets/vector-shape-eighteen.png';
import VectorShapeNineteen from '../assets/vector-shape-nineteen.png';
import VectorShapeTwenty from '../assets/vector-shape-twenty.png';
import VectorShapeTwentyOne from '../assets/vector-shape-twenty-one.png';
import VectorShapeTwentyTwo from '../assets/vector-shape-twenty-two.png';
import VectorShapeTwentyThree from '../assets/vector-shape-twenty-three.png';

const Footer: React.FC = () => {
  return (
    <div className='p-24 relative'>
            <div className='left-0 bottom-0 absolute'>
                <img src={VectorShapeEighteen} alt='vector shape eighteen' />
            </div>
            <div className='left-0 bottom-0 absolute'>
                <img src={VectorShapeNineteen} alt='vector shape nineteen' />
            </div>
            <div className='left-0 bottom-0 absolute'>
                <img src={VectorShapeTwenty} alt='vector shape twenty' />
            </div>
            <div className='grid grid-cols-5 gap-2 text-[#112232]'>
                <div className='row-start-1 row-end-4'>
                    <div className='flex items-center space-x-1.5'>
                        <img src={FooterLogo} alt='footer logo' />
                        <div className='h-6 border-2 rounded-md border-secondary'></div>
                        <h1 className='font-bold text-2xl text-secondary font-gilroyBold'>SCISSOR</h1>
                    </div>
                    <div className='flex space-x-6 mt-8'>
                        <img src={TwitterLogo} alt='twitter logo' />
                        <img src={InstagramLogo} alt='instagram logo' />
                        <img src={LinkedinLogo} alt='linkedin logo' />
                        <img src={FacebookLogo} alt='facebook logo' />
                    </div>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Why Scissor ?</h4>
                    <h6 className='font-gilroyMedium'>Scissor 101 Pricing</h6>
                    <h6 className='font-gilroyMedium'>Integrations &amp; API</h6>
                    <h6 className='font-gilroyMedium'>Pricing</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Solutions</h4>
                    <h6 className='font-gilroyMedium'>Social Media</h6>
                    <h6 className='font-gilroyMedium'>Digital Marketing</h6>
                    <h6 className='font-gilroyMedium'>Customer Service</h6>
                    <h6 className='font-gilroyMedium'>For Developers</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Products</h4>
                    <h6 className='font-gilroyMedium'>Link Management</h6>
                    <h6 className='font-gilroyMedium'>QR Codes</h6>
                    <h6 className='font-gilroyMedium'>Link-in-bio</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Company</h4>
                    <h6 className='font-gilroyMedium'>About Scissor</h6>
                    <h6 className='font-gilroyMedium'>Careers</h6>
                    <h6 className='font-gilroyMedium'>Partners</h6>
                    <h6 className='font-gilroyMedium'>Press</h6>
                    <h6 className='font-gilroyMedium'>Contact</h6>
                    <h6 className='font-gilroyMedium'>Reviews</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Resources</h4>
                    <h6 className='font-gilroyMedium'>Blog</h6>
                    <h6 className='font-gilroyMedium'>Resource Library</h6>
                    <h6 className='font-gilroyMedium'>Developers</h6>
                    <h6 className='font-gilroyMedium'>App Connectors</h6>
                    <h6 className='font-gilroyMedium'>Support</h6>
                    <h6 className='font-gilroyMedium'>Trust Center</h6>
                    <h6 className='font-gilroyMedium'>Browser Extension</h6>
                    <h6 className='font-gilroyMedium'>Mobile App</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Features</h4>
                    <h6 className='font-gilroyMedium'>Branded Links</h6>
                    <h6 className='font-gilroyMedium'>Mobile Links</h6>
                    <h6 className='font-gilroyMedium'>Campaign</h6>
                    <h6 className='font-gilroyMedium'>Management &amp; Analytics</h6>
                    <h6 className='font-gilroyMedium'>QR Code generation</h6>
                </div>
                <div>
                    <h4 className='font-gilroyBold mb-2'>Legal</h4>
                    <h6 className='font-gilroyMedium'>Privacy Policy</h6>
                    <h6 className='font-gilroyMedium'>Cookie Policy</h6>
                    <h6 className='font-gilroyMedium'>Terms of Service</h6>
                    <h6 className='font-gilroyMedium'>Acceptable Use Policy</h6>
                    <h6 className='font-gilroyMedium'>Code of Conduct</h6>
                </div>
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeTwentyOne} alt='vector shape twenty-one' />
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeTwentyTwo} alt='vector shape twenty-two' />
            </div>
            <div className='right-0 bottom-0 absolute'>
                <img src={VectorShapeTwentyThree} alt='vector shape twenty-three' />
            </div>
            <div className='flex justify-end'>
                <h6 className='text-sm font-gilroyMedium text-[#112232]'>Term of Service | Security | Scissor 2023</h6>
            </div>
    </div>
  )
}

export default Footer