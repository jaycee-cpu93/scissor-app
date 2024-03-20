import { collection, getDocs } from "firebase/firestore";
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../utils/Firebase';

const HandleUrl: React.FC = () => {
    console.log(useParams())
    const {shortened_url} = useParams()
    console.log(shortened_url)

    const redirectToExternalLink = (url: any) => {
        window.location.href = url;
      }; 
      
      useEffect(() => {
        const fetchData = async () => {
            const allDoc = collection(db, 'url-collection')
            //const q = query(allDoc)
            const allDocsSnap = await getDocs(allDoc);
            allDocsSnap.forEach((item) => {
                if (shortened_url === item.data().new) {
                    redirectToExternalLink(item.data().old)
                }
            })
        };
        fetchData();
    }, []);
  return (
    <div>
        <h3 className='text-2xl text-green-500'>Redirecting...</h3>
    </div>
  )
}

export default HandleUrl