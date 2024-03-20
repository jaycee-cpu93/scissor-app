import React, {useState} from 'react'
import { HiMinus } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";
import GradientLine from '../assets/gradient-line.svg';
import VectorShapeSix from '../assets/vector-shape-six.png';
import VectorShapeSeven from '../assets/vector-shape-seven.png';
import VectorShapeEight from '../assets/vector-shape-eight.png';
import VectorShapeNine from '../assets/vector-shape-nine.png';
import VectorShapeTen from '../assets/vector-shape-ten.png';
import VectorShapeEleven from '../assets/vector-shape-eleven.png';

const faqsData = [
    { 
        id: 1,
        question: "How does URL shortening work?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 2,
        question: "Is it necessary to create an account to use the URL shortening service?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 3,
        question: "Are the shortened links permanent? Will they expire?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 4,
        question: "Are there any limitations on the number of URLs I can shorten?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 5,
        question: "Can I customize the shortened URLs to reflect my brand or content?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 6,
        question: "Can I track the performance of my shortened URLs?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 7,
        question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 8,
        question: "What is a QR code and what can it do?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
    { 
        id: 9,
        question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
        answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."
    },
]
const Faqs:React.FC = () => {
    const [showModal, setShowModal] = useState<number | null>(null);
    const clickHandler = (currentIndex: number) => {
        setShowModal((prevState) => {
        if (prevState === currentIndex) {
            return null;
        } else {
            return currentIndex;
        }
        });
    };
  return (
    <div className='relative pb-24'>
        <div className='left-0 absolute'>
            <img src={VectorShapeSix} alt='vector shape six' />
        </div>
        <div className='left-0 absolute'>
            <img src={VectorShapeSeven} alt='vector shape seven' />
        </div>
        <div className='left-0 absolute'>
            <img src={VectorShapeEight} alt='vector shspe eight' />
        </div>
        <div className='flex justify-center gap-2 my-8'>
            <img src={GradientLine} alt='gradient line' />
            <h2 className=' font-gilroyBold text-[2.5rem]'>FAQs</h2>
        </div>
        <div className='mx-auto max-w-[800px]'>
            {faqsData.map((item, id) => (
                <div key={item.id} className='p-4'>
                    <div onClick={() => clickHandler(id)} className='flex justify-between ' >
                        {showModal === id ? (<div className='text-xl font-gilroyMedium'>{item.question}</div> ): (<div className='text-xl font-gilroyMedium'>{item.question}</div>)}
                        <span>
                            {showModal === id ? (<HiMinus className='w-6 h-6' />)  : (<FiPlus className='w-6 h-6'/> )  }
                        </span>
                    </div>
                    <div>
                        {showModal === id && <p className='font-gilroyMedium leading-8 w-[49.5em] mt-2'>{item.answer}</p>}
                    </div>
                    <div className='border-[1px] border-[#D6D6D6] border-solid my-3'>
                    </div>
                </div>
            ))}
        </div>
        <div className='right-0 bottom-0 absolute'>
            <img src={VectorShapeNine} alt='vector shape nine' />
        </div>
        <div className='right-0 bottom-0 absolute'>
            <img src={VectorShapeTen} alt='vector shape ten' />
        </div>
        <div className='right-0 bottom-0 absolute'>
            <img src={VectorShapeEleven} alt='vector shape eleven' />
        </div>
    </div>
  )
}

export default Faqs