import React, { useState } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../icons/Logo'
import HamburgerIcon from '../icons/HamburgerIcon'
import CloseIcon from '../icons/CloseIcon'

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(prevState => !prevState);
  }


  return (
    <header className='text-white font-barlow-condensed text-nav-text tracking-md flex items-center pl-4 tablet:pl-6 desktop:pl-12 w-full absolute desktop:top-12 tablet:top-6'>
      <Logo />
      <hr className='w-[38%] ml-10 z-10 opacity-[0.2515] desktop:block hidden' />
      <button
        onClick={toggleMenu}
        className='absolute right-6 top-7 scale-125 z-50'>
        {
          isMenuOpened ? <CloseIcon /> : <HamburgerIcon />
        }
      </button>
      <nav className={`desktop:w-[55%] tablet:w-[65%] w-[70%] ${isMenuOpened ? '' : 'hidden'} h-screen tablet:pl-0 pl-8 tablet:h-auto backdrop-blur-[40.77px] bg-white desktop:bg-opacity-[0.04] bg-opacity-[0.03] absolute tablet:-top-6 top-0 right-0 z-20`}>
        <ul className="flex tablet:flex-row flex-col tablet:justify-center justify-center tablet:items-center desktop:text-base text-[14px] desktop:tracking-sm tracking-md desktop:gap-16 tablet:gap-8 gap-6 tablet:h-full h-1/2 ">
          <NavLink
            to={'/'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 tablet:py-10 block tablet:h-full'>
            <span className='font-bold mr-3 desktop:inline tablet:hidden'>00</span>
            home
          </NavLink>
          <NavLink
            to={'/destination'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 tablet:py-10 block tablet:h-full'>
            <span className='font-bold mr-3 desktop:inline tablet:hidden'>01</span>
            destination
          </NavLink>
          <NavLink
            to={'/crew'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 tablet:py-10 block tablet:h-full'>
            <span className='font-bold mr-3 desktop:inline tablet:hidden'>02</span>
            crew
          </NavLink>
          <NavLink
            to={'/technology'}
            activeclassname='active'
            className='nav-link uppercase font-normal desktop:py-9 tablet:py-10 block tablet:h-full'>
            <span className='font-bold mr-3 desktop:inline tablet:hidden'>03</span>
            technology
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header