// BlogCard.js
import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { addblog } from '../Firebase/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Bars } from 'react-loader-spinner';

const BlogCard = () => {
    const [blog, setBlog] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        async function getData() {
            setloading(true);
            try {
                const querySnapshot = await getDocs(addblog);
                const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setBlog(dataArr);
                setloading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getData();
    }, []);

    return (


        <div>
            {loading ? (<div className='flex justify-center w-full items-center loading'>
                <Bars height={40} color='black' />
            </div>) : (<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
                {blog.map((e, i) => (
                    <div key={i} className='m-4 h-30 card p-2'>
                        <img src={e.image} className='w-full h-36' alt='' />
                        <h3 className='mt-2 mb-2 align-text-bottom font-normal'>{e.title}</h3>
                        <p>
                            <FontAwesomeIcon icon={faUser} className='mr-2 text-lg' />
                            {e.author}
                        </p>
                        <p className='text-sm text-bgcol1'>Publish: {e.published_date}</p>
                    </div>
                ))}

            </div>)
            }
        </div>

    );
};

export default BlogCard;
