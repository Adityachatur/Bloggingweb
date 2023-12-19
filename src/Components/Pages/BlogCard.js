import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import { addblog } from '../Firebase/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Grid } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

const BlogCard = ({ category }) => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(addblog);
        const dataArr = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setBlog(dataArr);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, []);

  const filteredBlogs = category === null ? blog : blog.filter(item => item.category === category);
  const indexOfLastBlog = currentPage * pageSize;
  const indexOfFirstBlog = indexOfLastBlog - pageSize;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {loading ? (
        <div className='flex justify-center w-full items-center'>
          <Grid height={40} color='black' />
        </div>
      ) : (
        <div>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
            {currentBlogs.map((e, i) => (
              <Link to={`/detail/${e.id}`} key={i}>
                <div key={i} className='m-4  h-30 card1 p-2'>
                  <img src={e.image} className='w-full h-36' alt='' />
                  <h3 className='mt-2 mb-2  align-text-bottom font-normal'>{e.title}</h3>
                  <p>
                    <FontAwesomeIcon icon={faUser} className='mr-2 text-lg' />
                    {e.author}
                  </p>
                  <p className='text-sm text-bgcol1'>Publish: {e.published_date}</p>
                </div>
              </Link>
            ))}
          </div>

          <Pagination
            onPageChange={onPageChange}
            CurrentPage={currentPage}
            pageSize={pageSize}
            blogs={filteredBlogs}
          />
        </div>
      )}
    </div>
  );
};

export default BlogCard;