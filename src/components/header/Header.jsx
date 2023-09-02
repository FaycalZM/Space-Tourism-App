import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='text-white font-barlow-condensed text-nav-text tracking-md flex items-center tablet:pl-6 desktop:pl-12 w-full absolute top-0 desktop:top-12 tablet:top-6 '>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd"
          d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z" fill="#0B0D17" />
      </svg>
      <hr className='w-[38%] ml-10 z-10 opacity-[0.2515] desktop:block hidden' />
      <nav className='desktop:w-[55%] tablet:w-[65%] backdrop-blur-[40.77px] bg-white desktop:bg-opacity-[0.04] bg-opacity-[0.03] absolute right-0 z-20'>
        <ul className="flex justify-center items-center desktop:text-base text-[14px] desktop:tracking-sm tracking-md desktop:gap-16 tablet:gap-8 h-full">
          <NavLink
            to={'/'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 py-10 block h-full'>
            <span className='font-bold mr-3 desktop:inline hidden'>00</span>
            home
          </NavLink>
          <NavLink
            to={'/destination'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 py-10 block h-full'>
            <span className='font-bold mr-3 desktop:inline hidden'>01</span>
            destination
          </NavLink>
          <NavLink
            to={'/crew'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 py-10 block h-full'>
            <span className='font-bold mr-3 desktop:inline hidden'>02</span>
            crew
          </NavLink>
          <NavLink
            to={'/technology'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 py-10 block h-full'>
            <span className='font-bold mr-3 desktop:inline hidden'>03</span>
            technology
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header