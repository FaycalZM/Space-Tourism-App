import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataProvider';
import data from '../../data/data.json'
import { NavLink, Outlet } from 'react-router-dom';
import './crew.css'
import 'animate.css'

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
    <div className='py-6 px-4 h-full '>
      <p className='page-title desktop:text-heading-5 text-[20px] font-barlow-condensed text-white desktop:tracking-lg tracking-[3.375px] desktop:mt-0 tablet:mt-12 mt-16 pl-4 tablet:text-left text-center uppercase'><span className='opacity-25 tablet:mr-7 mr-4 font-bold'>02</span>meet your crew</p>
      <div className='flex tablet:flex-row flex-col-reverse tablet:items-start items-center tablet:pb-0 pb-8'>
        <div className='crew-infos desktop:w-[45%] w-full tablet:pt-16 pt-10 flex tablet:flex-col flex-col-reverse desktop:justify-center justify-start desktop:items-start items-center desktop:text-left text-center h-full'>
          <Outlet context={[setCurrentCrewImage]} />
          <nav className='tablet:mt-8 tablet:mb-0 mb-8'>
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
        <hr className='h-[1.5px] border-none w-full bg-[#383B4B] tablet:hidden' />
        <img
          className='crew-img tablet:absolute desktop:right-0 tablet:right-1/2 desktop:top-0 bottom-0 desktop:h-[75vh] tablet:h-[50vh] tablet:w-auto w-[70%] tablet:mt-0 mt-8 desktop:-translate-x-[35%] tablet:translate-x-1/2 desktop:translate-y-1/4 '
          src={currentCrewImage} alt="crew-member-image" />
      </div>

    </div>
  )
}

export default Crew