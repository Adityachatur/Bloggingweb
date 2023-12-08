import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faCalendarDay, faClock } from '@fortawesome/free-solid-svg-icons';
import Headingpage from './Headingpage';

const DetailBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState(null);


    useEffect(() => {
      document.title = "Blog Detail  page";
    });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);

        if (!response.ok) {
          throw new Error('Blog not found');
        }

        const data = await response.json();
        setBlog(data[0]);
      } catch (error) {
        console.error('Error fetching blog:', error);
        // Redirect to a 404 page or handle the error accordingly
        navigate('/not-found');
      }
    };

    fetchData();
  }, [id, navigate]);

  return (
    <div>
      <Headingpage title={"All Blogs Are Here"} />
      
      <div className='lg:w-3/4 mx-auto'>
        {blog && (
          <div className='p-5'>
            <img src={blog.image} alt="" className='w-full mx-auto rounded ' />
            <h1 className='md:text-2xl font-Merriweather font-bold text-sm'>{blog.title}</h1>
            <p><FontAwesomeIcon icon={faUser} className='mr-2 mt-3 h-5'/> {blog.author} | <FontAwesomeIcon icon={faCalendarDay} className=' ml-2 mr-2 mt-3 h-5'/>  {blog.published_date}</p>
            <p><FontAwesomeIcon icon={faClock} className='mr-2 mt-3 h-5'/> {blog.reading_time}</p>
            <p className='text-base text-bgcol1 mt-3'>{blog.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailBlog;
