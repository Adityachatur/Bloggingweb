import React, { useEffect } from 'react'
import Headingpage from './Headingpage';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Blogpage from './Blogpage';

const Home = () => {
  useEffect(() => {
    document.title = "React Blogging page";
  });
  return (
    <div>
      <Headingpage title={"Welcome to Blog page"} gotoabout={<Link to={'/About'}>Learn More  <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-5 text-center pt-3' /></Link>} />
      <div className='md:max-w-7xl mx-auto '>
        <Blogpage />
      </div>
    </div>
  )
}

export default Home
