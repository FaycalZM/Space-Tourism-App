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
    <div className='py-6 desktop:px-4 px-8 h-full'>
      <p className='desktop:text-heading-5 text-[20px] font-barlow-condensed text-white desktop:tracking-lg tracking-[3.375px] desktop:mt-0 mt-12 uppercase'><span className='opacity-25 mr-7 font-bold'>02</span>meet your crew</p>
      <div className='desktop:w-[45%] w-full desktop:pt-0 pt-16 flex flex-col desktop:justify-center justify-start desktop:items-start items-center desktop:text-left text-center h-full'>

        <Outlet context={[setCurrentCrewImage]} />

        <nav className='mt-8'>
          <ul className='flex gap-6'>
            {
              crew.map((member, index) => {
                return <NavLink
                  key={index}
                  to={`/crew/${member.name}`}
                  activeclassname='active'
                  className='crew-nav-link h-4 w-4 rounded-full block bg-white opacity-[0.174] hover:opacity-50 transition duration-200 '>
                </NavLink>
              })
            }
          </ul>
        </nav>
      </div>
      <img
        className='absolute desktop:right-0 right-1/2 desktop:top-0 bottom-0 desktop:h-[75vh] h-[50vh] desktop:-translate-x-[35%] translate-x-1/2 desktop:translate-y-1/4 '
        src={currentCrewImage} alt="crew-member-image" />
    </div>
  )
}

export default Crew