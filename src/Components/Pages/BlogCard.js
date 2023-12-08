import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ blogs,CurrentPage,selectedcategory,pageSize }) => {
    const filterblog = blogs
    .filter((blogs) => !selectedcategory || blogs.category === selectedcategory)
    .slice((CurrentPage -1) * pageSize , CurrentPage * pageSize);
    console.log(filterblog);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12'>
            {
                filterblog.map((blog) => <Link to={`/blogs/${blog.id}`}key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                    <div className='m-2 h-30'>
                       <img src={blog.image} className='w-full h-36' alt="" />
                       <h3 className='mt-2 mb-2  align-text-bottom font-normal'>{blog.title}</h3>
                       <p><FontAwesomeIcon icon={faUser} className='mr-2 text-lg'/>{blog.author}</p>
                       <p className='text-sm text-bgcol1'>Publish: {blog.published_date}</p>

                    </div>
                </Link>)
            }
        </div>
    )
}

export default BlogCard
