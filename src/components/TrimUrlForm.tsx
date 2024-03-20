import React, { useState, useEffect } from 'react'
import MagicStick from '../assets/magic-stick.svg';
import VectorShapeOne from '../assets/vector-shape-one.png';
import VectorShapeTwo from '../assets/vector-shape-two.png';
import VectorShapeThree from '../assets/vector-shape-three.png';
import VectorShapeFour from '../assets/vector-shape-four.png';
import VectorShapeFive from '../assets/vector-shape-five.png';
import {AlphaNumericGenerator} from './AlphaNumericGenerator';
import {db} from '../utils/Firebase'
import {doc, setDoc} from "firebase/firestore";
import { Link } from 'react-router-dom';
import {QRCodeSVG} from 'qrcode.react';
import {FacebookIcon, FacebookShareButton, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from "react-share";




const TrimUrlForm: React.FC = () => {
  const [trimmedValue, setTrimmedValue] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [oldUrl, setOldUrl] = useState<string>('');
  const [generator, setGenerator] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const shareUrl = `https://${generator}`

  useEffect(()=> {
    const updateData = async () => {
      if (oldUrl !== "" && generator !== ""){
        await setDoc(doc(db, 'url-collection', AlphaNumericGenerator(4)),{
        old: oldUrl,
        new: generator,
      })}
    };
    updateData();
  }, [oldUrl, generator])

  const handleButtonClick = () => {
    if (!isValidUrl(inputValue)) {
      setError('Invalid URL. Please enter a valid URL.');
      return;
    }
    setError('');
    console.log('url value:', inputValue);
    setOldUrl(inputValue);
    setGenerator(AlphaNumericGenerator(8));
    setTrimmedValue(true)

    //const generator = AlphaNumericGenerator(8)
    //const urlGenerator = `${generator}`
   // console.log(urlGenerator)

  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const isValidUrl = (url: string) => {
    // Regular expression to validate URL format
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleDownload = () => {
    const qrCodeSvgElement = document.getElementById('qrcode');
    if (qrCodeSvgElement) {
      const svgString = new XMLSerializer().serializeToString(qrCodeSvgElement);
      const dataUrl = `data:image/svg+xml;base64,${btoa(svgString)}`;
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const pngDataUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.download = 'qrcode.png';
          link.href = pngDataUrl;
          link.click();
        }
      };
      img.src = dataUrl;
    }
  };
  return (
    <div className='bg-[#1E3448] w-full relative'>
      <div className='left-0 absolute'>
            <img src={VectorShapeOne}  alt='vector shape 1'/>
      </div>
      <div className='left-0 absolute'>
           <img src={VectorShapeTwo}  alt='vector shape 2'/>
      </div>
      <div className='left-0 absolute'>
           <img src={VectorShapeThree}  alt='vector shape 3'/>
      </div>
      <form>
          <div className='flex justify-center items-center py-[5.5rem]'>
              <div className='bg-[#FFFFFF] w-[29.75em] p-10 space-y-6 rounded-xl'>
                  <div className='grid grid-cols-1'>
                      <input  value={inputValue}  onChange={handleInputChange} className='border-[0.0625em] border-primary border-solid rounded-xl py-4 px-6 placeholder:text-primary placeholder:font-gilroyMedium placeholder:text-xs' placeholder='Paste URL here...'/>
                      {error && <p className="text-red-500 text-sm">{error}</p>}
                  </div>
                  <div className='grid grid-cols-2 space-x-4'>
                      {trimmedValue && <button type='button'  className='bg-[#252424] px-10 py-3 rounded-[6.25em] text-white font-gilroySemiBold'><span className='flex gap-4 justify-center'><Link to={`/${generator}`}>{generator}</Link></span></button>}
                      <select className='border-[1px] border-primary border-solid rounded-xl py-4 px-6 text-xs text-primary font-gilroyMedium'>
                          <option disabled>Choose Domain</option>
                          <option>scissor-app-project.netlify.app/</option>
                      </select>
                      {!trimmedValue && <input className='border-[0.0625em] border-primary border-solid rounded-xl py-4 px-6 placeholder:text-primary placeholder:font-gilroyMedium placeholder:text-xs' placeholder='Type Alias here'/>}
                  </div>
                  <div className='flex gap-16 relative'>
                      <div>
                        {trimmedValue &&  <QRCodeSVG id='qrcode' value={`https://${generator}`} className='w-36 h-32'/>}
                        {trimmedValue && <button type='button' onClick={handleDownload} className='text-white text-sm bg-black p-2 my-2 rounded-xl'>Download QR Code</button>}
                      </div>
                      <div>
                        {trimmedValue && <button type='button' onClick={() => setIsModalOpen(!isModalOpen)} className='bg-black w-28 h-12 rounded-xl text-white' >Share Link</button>}
                      </div>
                      <div className='absolute right-2'>
                          {trimmedValue && isModalOpen && <p className='bg-black p-4 rounded-xl flex flex-col gap-1'>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <LinkedinShareButton url={shareUrl}>
                                <LinkedinIcon size={32} round={true} />
                            </LinkedinShareButton>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                          </p>} 
                      </div>
                    </div>
                  <div className='grid grid-cols-1 space-y-4'>
                     <button type='button' onClick={handleButtonClick}  className='bg-tertiary px-10 py-3 rounded-[6.25em] text-white font-gilroySemiBold'><span className='flex gap-4 justify-center'>Trim Url <img src={MagicStick} /></span></button>
                     <p className='text-primary text-sm font-gilroyMedium w-[24em]'>By clicking TrimURL, I agree to the <span className='font-gilroyBold'>Terms of Service, Privacy Policy</span> and Use of Cookies.</p>
                  </div>
              </div>
          </div>
      </form>
      <div className='right-0 bottom-0 absolute'>
        <img src={VectorShapeFour} alt='vector shape 4' />
      </div>
      <div className='right-0 bottom-0 absolute'>
        <img src={VectorShapeFive} alt='vector shape 5' />
      </div>
    </div>
  )
}

export default TrimUrlForm