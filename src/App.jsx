import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
// importing pages

import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
// importing components

import './App.css';
// importing css

import { Route, Routes } from 'react-router-dom';
// importing libraries

function App() {
  return (
    <>
      <Navbar />
      <div className='pages-ctr'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Contact />
    </>
  )
}

export default App;
