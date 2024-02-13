import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
// import Hero from './components/Hero';
// import Cards from './components/Cards';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import SignUp from './components/Pages/SignUp';
import Footer from './components/Footer';



function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      {/* <Hero />
      <Cards /> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={< About />}/>
        <Route exact path='/services' element={<Services />}/>
        <Route exact path='/sign-up' element={<SignUp />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
      
    </>
  );
}


// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Services = () => <h1>Services Page</h1>;
// const SignUp = () => <h1>SignUp Page</h1>;

export default App;
