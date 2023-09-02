import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataProvider';
import data from '../../data/data.json'
import { NavLink, Outlet } from 'react-router-dom';
import './crew.css'

const crew = data.crew;


const Crew = () => {
  const [currentCrewImage, setCurrentCrewImage] = useState(crew[0].images.png);
  const { changeMainPageBackground } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/crew/background-crew');
    }, []
  )
  return (
    <div className='py-6 px-4 h-full'>
      <p className='text-heading-5 font-barlow-condensed text-white tracking-lg uppercase'><span className='opacity-25 mr-7 font-bold'>02</span>meet your crew</p>
      <div className='w-[40%]  flex flex-col justify-center h-full'>

        <Outlet context={[setCurrentCrewImage]} />

        <nav className='mt-8'>
          <ul className='flex gap-6'>
            {
              crew.map((member, index) => {
                return <NavLink
                  key={index}
                  to={`/crew/${member.name}`}
                  activeclassname='active'
                  className='crew-nav-link h-4 w-4 rounded-full block bg-white opacity-[0.174] hover:opacity-100 transition duration-200 '>
                </NavLink>
              })
            }
          </ul>
        </nav>
      </div>
      <img
        className='absolute right-0 top-0 h-[75vh] -translate-x-[35%] translate-y-1/4 '
        src={currentCrewImage} alt="crew-member-image" />
    </div>
  )
}

export default Crew