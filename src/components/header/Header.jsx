import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-white font-barlow-condensed text-nav-text tracking-md flex items-center pl-12 w-full absolute top-12'>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
      </svg>
      <hr className='w-[38%] ml-10 z-10 opacity-[25.15%]' />
      <nav className='w-[55%] backdrop-blur-[40.77px] bg-white bg-opacity-[4%] absolute right-0'>
        <ul className="flex justify-center items-center gap-16 h-full">
          <NavLink
            to={'/'}
            activeclassname='active'
            className='nav-link uppercase font-normal py-9 block h-full'>
            <span className='font-bold mr-3'>00</span>
            home
          </NavLink>
          <NavLink
            to={'/destination'}
            activeclassname='active'
            className='nav-link uppercase font-normal py-9 block h-full'>
            <span className='font-bold mr-3'>01</span>
            destination
          </NavLink>
          <NavLink
            to={'/crew'}
            activeclassname='active'
            className='nav-link uppercase font-normal py-9 block h-full'>
            <span className='font-bold mr-3'>02</span>
            crew
          </NavLink>
          <NavLink
            to={'/technology'}
            activeclassname='active'
            className='nav-link uppercase font-normal py-9 block h-full'>
            <span className='font-bold mr-3'>03</span>
            technology
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header