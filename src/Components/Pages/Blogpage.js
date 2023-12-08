import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';
import SelectCategory from './SelectCategory';

const Blogpage = () => {
  const [blog, setBlog] = useState([]);
  const [CurrentPage, setCurrentpage] = useState(1);
  const pageSize = 12;
  const [selectedcategory, setSelectedcategory] = useState(null);
  const [Activecategory, setActivecategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${CurrentPage}&limit=${pageSize}`;
      try {
        if (selectedcategory) {
          url += `&category=${selectedcategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchBlogs();
  }, [CurrentPage, pageSize, selectedcategory]);

  //  page change btn
  const pagechnagehandle = (pagehandle) => {
    setCurrentpage(pagehandle);
  }

  const categorychangehandle = (categories) => {
    setSelectedcategory(categories);
    setCurrentpage(1);
    setActivecategory(categories); // Fixed the typo here
  }

  return (
    <div>
      {/* Blog category */}
      <div>
        <SelectCategory onSeleactCategorychnage={categorychangehandle} selectedcategory={selectedcategory} Activecategory={Activecategory} />
      </div>

      {/* blog cards */}
      <div className='flex flex-col gap-12 lg:flex-row'>
       
        <BlogCard blogs={blog} CurrentPage={CurrentPage} selectedcategory={selectedcategory} pageSize={pageSize} />
      </div>

      {/* blog pagination */}
      <div>
        <Pagination onPageChange={pagechnagehandle} CurrentPage={CurrentPage} blogs={blog} pageSize={pageSize} />
      </div>
    </div>
  );
}

export default Blogpage;
