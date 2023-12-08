import './App.css';
// import Blogs from './Components/Pages/Blogs';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Navbar/Footer';
import DetailBlog from './Components/Pages/DetailBlog';
import Service from './Components/Pages/Service';
function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service/>}/>
        <Route
          path='/blogs/:id'
          element={<DetailBlog />}
          loader={(params) => fetch(`http://localhost:5000/blogs/${params.id}`).then((res) => res.json())}
        />

      </Routes>
      <Footer/>

    </>
  );
}

export default App;
