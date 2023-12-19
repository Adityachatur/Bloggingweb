import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import Headingpage from './Headingpage';
import { getDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { db } from '../Firebase/Firebase';
import {ThreeDots} from 'react-loader-spinner';

const DetailBlog = () => {
  useEffect(() => {
    document.title = "Blog Detail page";
  });

  const { id } = useParams();
  const [loading, setloading] = useState(false);
  const [blog, setblog] = useState({
    title: '',
    image: '',
    author: '',
    category: '',
    published_date: '',
    reading_time: '',
    content: '',
  });

  useEffect(() => {

    async function getData() {
      setloading(true);
      const _doc = doc(db, "Addblog", id);
      try {
        const _data = await getDoc(_doc);
        if (_data.exists()) {
          setblog(_data.data());
        } else {
          console.error("Document does not exist:", id);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
      setloading(false);
    }
    getData();
  }, [id]);

  return (
    <div>
      <Headingpage title={"All Blogs Are Here"} />
      {loading ? (<div className='flex justify-center w-full items-center loading'>
        <ThreeDots height={40} color='black' />
      </div>) : (
        <div className='lg:w-3/4 mx-auto'>
          <div className='p-5'>
            <img src={blog.image} alt="" className='w-full mx-auto rounded ' />
            <h1 className='md:text-2xl font-Merriweather font-bold text-sm mt-2'>{blog.title}</h1>
            <p><FontAwesomeIcon icon={faUser} className='mr-2 mt-3 h-5' /> {blog.author} | <FontAwesomeIcon icon={faCalendarDay} className=' ml-2 mr-2 mt-3 h-5' />  {blog.published_date}</p>
            <p><FontAwesomeIcon icon={faClock} className='mr-2 mt-3 h-5' /> {blog.reading_time}</p>
            <p className='text-base text-bgcol1 mt-3'>{blog.content}</p>
          </div>
        </div>

      )}

    </div>
  );
};

export default DetailBlog;
