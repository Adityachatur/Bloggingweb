import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate , faCode , faCubes, faDesktop, faLink, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const ServiceCard = () => {
  return (
    <div>
       <div className='flex max-w-6xl h-auto md:mx-auto my-8 gap-12 justify-center '>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-5 grid-cols-1 gap-12 '>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon icon={faArrowsRotate} className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '>Refreshing Design</h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>"Updating style, enhancing aesthetics, modernizing appearance,rejuvenating appeal, revitalizing look."</p>
                    </div>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon  icon={faCode}className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '>Based On Tailwind Css</h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>"Dedicated to discerning clients, we prioritize exceptional service, integrity, and aesthetic excellence."</p>
                    </div>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon icon={faCubes} className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '> 50+ Components</h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>"Utilizing 50+ components to enhance web and other pages."</p>
                    </div>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon icon={faDesktop} className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '> Speed Optimization </h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>"Enhancing website speed for better performance and user experience."</p>
                    </div>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon icon={faLink} className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '>Fully Customizable</h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>Creating bespoke experiences with our fully customizable solutions.</p>
                    </div>
                    <div className=' bg-blue-300 rounded-lg shadow-lg shadow-gray-500 card'>
                        <h3><FontAwesomeIcon icon={faThumbsUp} className='h-10 m-4 text-yellow-50' /></h3>
                        <h1 className='md:text-xl text-lg mb-2 ml-4 font-bold text-textcol '> Regular Update</h1>
                        <p className='ml-4 mr-1 mb-2 text-bgcol1'>"Consistent, timely updates for ongoing improvement and communication."</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ServiceCard
