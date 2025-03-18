"use client"
// import Link from 'next/link'
import {Link} from 'react-scroll'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <nav className='fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] opacity-100'>
      <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto p-6'>
        <Link to="home-section" smooth={true} duration={500} className='text-2xl md:text-4xl text-white font-semibold cursor-pointer'>Portfolio</Link>
        {/* hamburger Icon */}
        <div className='block md:hidden'>
          {!navbarOpen ?
            <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded-md border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <Bars3Icon className='w-5 h-5 text-white cursor-pointer' />
            </button>
            : <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded-md border-slate-200 text-slate-200 hover:text-white hover:border-white'>
              <XMarkIcon className='w-5 h-5 transform hover:rotate-90 transition-all text-white cursor-pointer' />
            </button>
          }
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            <li>
              <Link smooth={true} duration={500} offset={-100} to="about-section" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group cursor-pointer'>
                About
                <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link smooth={true} duration={500} offset={-100} to="projects-section" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group cursor-pointer'>
                Projects
                <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link smooth={true} duration={500} offset={-100} to="contact-section" className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white relative group cursor-pointer'>
                Contact
                <span className="absolute left-0 bottom-0 block w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>

      </div>
      {/* Mobile View */}
      {navbarOpen && (
        <ul className='flex flex-col p-4 items-center transition-all h-screen'>
          <li><Link to={"#about"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>About</Link></li>
          <li><Link to={"#projects"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Projects</Link></li>
          <li><Link to={"#content"} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>Contact</Link></li>
        </ul>
      )

      }
    </nav>
  )
}

export default Header
