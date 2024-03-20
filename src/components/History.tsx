import {useEffect, useState} from 'react';
import {db} from '../utils/Firebase'
import { collection, getDocs } from "firebase/firestore";
import  { Link} from 'react-router-dom'
import Nav from './Nav';
import Footer from './Footer';

const History: React.FC = () => {
    const [data, setData] = useState<string[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const allDoc = collection(db, 'url-collection')
            //const q = query(allDoc)
            const allDocsSnap = await getDocs(allDoc);
            allDocsSnap.forEach((item) => {
                console.log(item.data())
                const temp = item.data()
                setData((data: any) => [...data, temp]);
            })
        };
        fetchData();
    }, []);
  return (
    <div>
        <div className='px-24 py-5 overflow-hidden'>
           <Nav /> 
           <h2 className='my-10 text-center text-primary font-gilroyBold text-2xl'>My Links</h2>
            <ol >
                {data.map((item: any, index) =>
                    (
                    <li key={index}>
                        <div className='bg-blue-300 rounded-lg p-4 my-4 flex flex-col items-center'>
                            <div className='bg-white text-black p-3 w-[100%] text-center rounded-xl'>
                                {item.old}
                            </div>
                            <div className='flex gap-3 font-gilroyBold my-2'>
                                <p>Shortened Url ===&gt; </p>
                                <Link to={`/${item.new}`}>https://{item.new}</Link>
                            </div>
                        </div>
                    </li>)
                )}
            </ol>
        </div>
        <Footer />
    </div>
  )
}

export default History