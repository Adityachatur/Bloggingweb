import React, { useEffect } from 'react'
import Headingpage from './Headingpage';
import ServiceCard from './ServiceCard';

const Service = () => {
    useEffect(() =>{
        document.title="Service page"; 
      });
    return (
        <div>
            <Headingpage title={"Service page "} />
            <div className='text-center mt-10'>
                <p className='text-orange-600 text-base'>Our Service</p>
                <h1 className='text-bgcol2 md:text-4xl font-Merriweather mt-3 font-bold text-3xl '>What We Offer</h1>
                <h3 className='m-3 text-base text-bgcol2'>Certainly! Here's a simplified version: <br />"We write interesting and helpful blog posts that match your audience and industry."</h3>
            </div>
            <ServiceCard/>
        </div>
    )
}

export default Service
