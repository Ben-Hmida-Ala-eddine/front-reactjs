import React from 'react';
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Selects from './components/Selects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { Home } from '@material-ui/icons';
import SignUp from './components/sign/signup'
import SignIn from './components/sign/signin';


function App() {
  console.log("test")
 return (


      <Router>
      <div>
          <Routes>
         
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />


         
          </Routes>
       </div>
       </Router>


  );
}

export default App;
