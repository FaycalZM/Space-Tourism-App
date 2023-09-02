import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataProvider';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../../data/data.json'
import './destination.css'

const { destinations } = data;

const Destination = () => {
  const [currentDestinationImage, setCurrentDestinationImage] = useState(destinations[0].images.png);
  const { changeMainPageBackground } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/destination/background-destination');
    }, []
  )
  return (
    <div className='py-6 desktop:px-4 px-8 '>
      <p className='desktop:text-heading-5 text-[20px] font-barlow-condensed text-white desktop:tracking-lg tracking-[3.375px] desktop:mt-0 mt-12 uppercase'><span className='opacity-25 mr-7 font-bold'>01</span>pick your destination</p>
      <div className='flex desktop:flex-row tablet:flex-col desktop:text-left text-center pt-2 justify-around items-center '>
        <img
          className=' desktop:w-1/3 w-[38.5%] desktop:mt-8 mt-12'
          src={currentDestinationImage}
          alt={`destination_image`} />
        <div className='desktop:w-1/3 w-full desktop:mt-0 mt-8'>
          <nav className='font-barlow-condensed text-nav-text tracking-md px-1 flex desktop:justify-start justify-center'>
            <ul className='flex gap-9 '>
              {
                destinations.map((destination, index) => {
                  return <NavLink
                    to={`/destination/${destination.name}`}
                    className={`secondary-nav-link py-2 text-very-light-grayish-blue uppercase`}
                    activeclassname='active'
                    key={index}>
                    {destination.name}
                  </NavLink>
                })
              }
            </ul>
          </nav>
          <Outlet context={[setCurrentDestinationImage]} />
        </div>
      </div>
    </div>
  )
}

export default Destination