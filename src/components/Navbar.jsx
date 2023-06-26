import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  //const {color} = props ;
  const {isAbsolute =true} = props ;
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };
console.log(isAbsolute);
  return (
    <div className={isAbsolute ? 'flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white' : 'flex w-full justify-between items-center h-20 px-4  z-10 text-white' }>
      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block' } style={{ color: props.color}}>TRAVAUX.</h1>
      </div>
      <ul className='hidden md:flex' style={{ color: props.color}}>
        <li>Comment ça marche</li>
        <li>Publier un projet</li>
        <li><Link to="/signin" >Connexion</Link></li>
        <li>S'inscrire en tant que professionel</li>
      </ul>
      <div className='hidden md:flex'>
        <BiSearch className='' size={20} />
        <BsPerson size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>TRAVAUX.</h1>
          <li className='border-b'>Comment ça marche</li>
          <li className='border-b'>Publier un projet</li>
          <li className='border-b'>Connexion</li>
          <li className='border-b'>S'inscrire en tant que professionel</li>
          <div className='flex flex-col'>
            <button className='my-6'>Search</button>
            <button>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
