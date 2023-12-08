import React, { useEffect } from 'react'
import Headingpage from './Headingpage';

const About = () => {

  useEffect(() => {
    document.title = "About page";
  });
  return (
    <div>
      <Headingpage title={"About Page"} />

      <div className='flex max-w-7xl  max-h-4xl  md:mx-auto my-8 gap-12 justify-center'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 mx-5 grid-cols-1 gap-1 '>
          <div className='flex md:justify-end md:mr-10  justify-center mx-auto '>
            <img src="https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_1280.jpg" className='lg:w-full  w-80  rounded-lg' alt="" />
          </div>
          <div className='ml-4'>
            <p className='text-orange-400 text-lg'>who we are</p>
            <h1 className='text-bgcol2 md:text-4xl font-Merriweather mt-2 font-bold text-3xl'>
              we are provide high quality Article and Blogs
            </h1>
            <p className='m-3 text-base text-bgcol2'>A blogger website is a type of website that is created and maintained by a person or group of people who regularly post content about a particular topic or interest. Blogger websites can range from personal blogs written by individuals to professional websites run by businesses or organizations. Blogger websites can be customized with different themes, design options, and content types to fit the needs and preferences of the owner. </p>
          </div>
        </div>
      </div>

      <div className='max-w-7xl lg:ml-28 md:ml-16 ml-10 '>
        <h1 className='md:text-3xl text-lgfont-Merriweather font-bold'>Top Author</h1>
      </div>

      <div className='flex max-w-6xl md:mx-auto my-8 gap-12 justify-center'>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols- gap-12'>

          <div className='rounded-lg shadow-lg text-center bg-gray-100 card w-64 '>
            <img className="authorimg rounded-full m-4 mx-auto"src="https://techcrunch.com/wp-content/uploads/2021/08/Darrell-2021-square.jpg?w=200&h=200&crop=1" alt="" />
            <h1 className='text-md text-bgcol1 font-bold  '>Darrell Etherington</h1>
            <p className='mt-3 font-semibold'>Managing Editor, U.S. </p>
            <p className='text-base'>50+ Article publish</p>
          </div>
          <div className='rounded-lg shadow-lg text-center bg-gray-100 card w-64'>
            <img className="authorimg rounded-full m-4 mx-auto"src="https://blackhattalent.com/wp-content/uploads/2023/09/shradha-sharma-1.jpg" alt="" />
            <h1 className='text-md text-bgcol1 font-bold  '>Shradha Sharma</h1>
            <p className='mt-3 font-semibold'>Founder and CEO of YourStory</p>
            <p className='text-base'>100+ Article publish</p>
          </div>
          <div className='rounded-lg shadow-lg text-center bg-gray-100 card w-64'>
            <img className="authorimg rounded-full m-4 mx-auto"src="https://digitaldeepak.com/content/images/wp-content/uploads/2019/01/Ankit-SIngla-MasterBlogging.png" alt="" />
            <h1 className='text-md text-bgcol1 font-bold  '>Ankit Singla.</h1>
            <p className='mt-3 font-semibold'>blogger and digital entrepreneur.</p>
            <p className='text-base'>50+ Article publish</p>
          </div>
          <div className='rounded-lg shadow-lg text-center bg-gray-100 card w-64 '>
            <img className="authorimg rounded-full m-4 mx-auto"src="https://media.licdn.com/dms/image/C4E03AQFK0SaTXxFEtg/profile-displayphoto-shrink_800_800/0/1639839985537?e=2147483647&v=beta&t=lzLEJvQmFmWyuoD8FtFzmpl1lkoLbAT2kHJ5iiytzVI" alt="" />
            <h1 className='text-md text-bgcol1 font-bold  '>Harsh Agrawal</h1>
            <p className='mt-3 font-semibold'>Blogger</p>
            <p className='text-base'>50+ Article publish</p>
          </div>


        </div>
      </div>



    </div>
  )
}

export default About
