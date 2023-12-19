import React, { useState, useEffect } from 'react';
import Headingpage from './Headingpage';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BlogCard from './BlogCard';
import SelectCategory from './SelectCategory';
//import Pagination from './Pagination';

const Home = () => {
  useEffect(() => {
    document.title = "React Blogging page";
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <Headingpage title={"Welcome to Blog page"} gotoabout={<Link to={'/About'}>Learn More  <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-5 text-center pt-3' /></Link>} />

      <div className='md:max-w-6xl mx-auto '>
        <SelectCategory onSeleactCategorychnage={setSelectedCategory} selectedcategory={selectedCategory} Activecategory={selectedCategory} />
        <BlogCard category={selectedCategory} />
      </div>
    </div>
  );
}

export default Home;