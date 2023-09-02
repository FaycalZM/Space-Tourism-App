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
    <div className='py-6 px-4'>
      <p className='text-heading-5 font-barlow-condensed text-white tracking-lg uppercase'><span className='opacity-25 mr-7 font-bold'>01</span>pick your destination</p>
      <div className='flex pt-2 justify-around items-center '>
        <img
          className=' w-1/3 mt-8'
          src={currentDestinationImage}
          alt={`destination_image`} />
        <div className='w-1/3 '>
          <nav className='font-barlow-condensed text-nav-text tracking-md px-1'>
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