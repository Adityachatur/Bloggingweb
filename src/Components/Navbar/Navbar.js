// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-bgcol1 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="text-textcol font-bold text-lg pl-10">Blogging web</div>

                {/* Mobile menu button */}
                <button
                    className="lg:hidden text-textcol focus:outline-none"
                    onClick={toggleNavbar}
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faXmark} className='w-5 h-10 text-textcol' />
                    ) : (
                        <FontAwesomeIcon icon={faBars} className='w-5 h-10 text-textcol'  />
                    )}
                </button>

                {/* Desktop menu */}
                <div className="hidden lg:flex space-x-7">
                    <Link to={"/"} class="text-xl font-bold text-textcol hover:text-red-900 hover:border-b-2 border-red-900">Home</Link>
                    <Link to={'/About'} class="mr-5 text-xl text-textcol font-bold hover:text-red-900 hover:border-b-2 border-red-900">About </Link>
                    <Link to={'/Service'} class="mr-5 text-xl text-textcol font-bold hover:text-red-900 hover:border-b-2 border-red-900">Service </Link>
                    <Link to={'/Contact'} class="mr-5 text-xl text-textcol font-bold hover:text-red-900 hover:border-b-2 border-red-900">Contact </Link>
                  
                </div>

                <div className='hidden lg:flex spacex-4'>
                    <TwitterIcon className='text-textcol w-5 h-5 mx-1' />
                    <Link to={'https://www.linkedin.com/in/adityachatur/'}> <LinkedInIcon className='text-textcol w-5 h-5 mx-1 cursor-pointer' /></Link>
                    <InstagramIcon className='text-textcol w-5 h-5 mx-1' />
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <>
                    <div className="lg:hidden mt-2 flex flex-col items-center" onClick={toggleNavbar}>
                        <Link to={"/"} class="mr-5 mt-3 text-xl font-bold text-textcol hover:text-red-900 hover:border-b-2 border-red-900">Home</Link>
                        <Link to={'/About'} class="mr-5 mt-3 text-textcol text-xl font-bold hover:text-red-900 hover:border-b-2 border-red-900">About </Link>
                        <Link to={'/Service'} class="mr-5 text-xl text-textcol font-bold hover:text-red-900 hover:border-b-2 border-red-900">Service </Link>
                        <Link to={'/Contact'} class="mr-5 text-xl text-textcol font-bold hover:text-red-900 hover:border-b-2 border-red-900">Contact </Link>
                     
                    </div>
                    <div className='lg:hidden mt-4 flex justify-center items-center' onClick={toggleNavbar}>
                        <TwitterIcon className='text-textcol w-5 h-5 mx-1' />
                       <Link to={'https://www.linkedin.com/in/adityachatur/'}> <LinkedInIcon className='text-textcol w-5 h-5 mx-1 cursor-pointer' /></Link>
                        <InstagramIcon className='text-textcol w-5 h-5 mx-1' />
                    </div>
                </>

            )}
        </nav>
    );
};

export default Navbar;
