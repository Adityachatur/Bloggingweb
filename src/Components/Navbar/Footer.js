import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer class="bg-bgcol1 body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                        <span class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <FontAwesomeIcon className='text-white h-14' icon={faBlog}/>
                            <span class="ml-3 text-textcol text-xl">BLog web  page </span>
                        </span>
                        <p class="mt-2 text-sm text-textcol"> A practical blog for impractical people</p>
                    </div>
                    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-bgcol4  hover:text-white tracking-widest text-sm mb-3">Contact</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Aditya Chatur</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">+91 9552314201</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Adityachatur7996@gmail.com</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">https://github.com/Adityachatur</span>
                                </li>
                                <li>
                                    <Link to={'https://adityachatur.github.io/Aditya_Personal_Portfolio.github.io/'}><span className='text-textcol hover:text-bgcol4'>Portfolio</span></Link>
                                    
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-bgcol4  hover:text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">News</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">World</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Games</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Reference</span>
                                </li>
                            </nav>
                        </div>                       
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-bgcol4  hover:text-white tracking-widest text-sm mb-3">Cherry</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Media</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Brochure</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Nonprofit</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Education</span>
                                </li>
                                <li>
                                    <span className='text-textcol hover:text-bgcol4'>Projects</span>
                                </li>
                            </nav>
                           
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="title-font font-medium text-bgcol4  hover:text-white tracking-widest text-sm mb-3">Business</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Information</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Personal</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Wiki</span>
                                </li>
                                <li>
                                    <span class="text-textcol hover:text-bgcol4">Contact</span>
                                </li>
                            </nav>
                        </div>
                       
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                       <p>CopyRight 2023 | All Right Reserverd</p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <TwitterIcon className='text-bgcol1 w-5 h-5 mx-1' />
                    <LinkedInIcon className='text-bgcol1 w-5 h-5 mx-1' />
                    <InstagramIcon className='text-bgcol1 w-5 h-5 mx-1' />
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
