import React from 'react'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import logo from "../assets/kevinRushLogo.png"
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
           <a href="https://github.com/priyam-mathur"> <FaGithub className='hover:text-white'/></a>
            <a href="https://www.linkedin.com/in/priyam-mathur-b53b31277"><FaLinkedin className='hover:text-white'/></a>
            <a href="https://instagram.com/priyam_31"><FaInstagram className='hover:text-white'/></a>
            <a href=""><FaSquareXTwitter className='hover:text-white'/></a>
        </div>
    </nav>
  )
}

export default Navbar
