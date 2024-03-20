import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {db} from '../utils/Firebase'
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import  { redirect } from 'react-router-dom'

const HandleUrl: React.FC = () => {
    const [params, setParams] = useState('')
    interface ParamTypes {
        shortUrl: string;
    }
    console.log(useParams())
    const {shortened_url} = useParams()
    console.log(shortened_url)

    const redirectToExternalLink = (url) => {
        window.location.href = url;
      }; 
      
      useEffect(() => {
        const fetchData = async () => {
            const allDoc = collection(db, 'url-collection')
            //const q = query(allDoc)
            const allDocsSnap = await getDocs(allDoc);
            allDocsSnap.forEach((item) => {
                console.log(item.data())
                const temp = item.data()
                if (shortened_url === item.data().new) {
                    redirectToExternalLink(item.data().old)
                }
            })
        };
        fetchData();
    }, []);
  return (
    <div>
        {params}
        <h3 className='text-2xl text-green-500'>Redirecting...</h3>
    </div>
  )
}

export default HandleUrl