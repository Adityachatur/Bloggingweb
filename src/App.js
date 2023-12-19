  import './App.css';
  // import Blogs from './Components/Pages/Blogs';
  import About from './Components/Pages/About';
  import Home from './Components/Pages/Home';
  import Navbar from './Components/Navbar/Navbar';
  import { Routes, Route } from 'react-router-dom';
  import Footer from './Components/Navbar/Footer';
  import DetailBlog from './Components/Pages/DetailBlog';
  import Service from './Components/Pages/Service';
  import Contact from './Components/Pages/Contact';
  import Addblog from './Components/Pages/Addblog';
  import BlogCard from './Components/Pages/BlogCard';
  function App() {
    return (
      <>

        <Navbar />
        <Routes>
          <Route path='/Addblog' element={<Addblog/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/' element={<BlogCard/>}/>
          <Route path='/detail/:id' element={<DetailBlog/>}/>
        </Routes>
        <Footer/>

      </>
    );
  }

  export default App;
