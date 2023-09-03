import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataProvider';
import data from '../../data/data.json'
import { NavLink, Outlet } from 'react-router-dom';
import './technology.css'
import 'animate.css'


const { technology } = data;

const Technology = () => {
  const [currentTechnologyImagePortrait, setCurrentTechnologyImagePortrait] = useState(technology[0].images.portrait);
  const [currentTechnologyImageLandscape, setCurrentTechnologyImageLandscape] = useState(technology[0].images.landscape);
  const { changeMainPageBackground } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/technology/background-technology')
    }, []
  )
  return (
    <div className='py-6 desktop:pl-2 relative'>
      <p className='page-title desktop:text-heading-5 text-[20px] font-barlow-condensed text-white desktop:tracking-lg tracking-[3.375px] desktop:mt-0 tablet:mt-12 mt-16 tablet:ml-8 tablet:text-left text-center uppercase'>
        <span className='opacity-25 tablet:mr-7 mr-4 font-bold'>03</span>
        space launch 101
      </p>
      <div
        style={{
          '--tablet-technology-image-url': `url('${currentTechnologyImageLandscape}')`,
        }}
        className='tech-img-landscape bg-[image:var(--tablet-technology-image-url)] bg-cover bg-center tablet:h-[32.5vh] h-[25vh] mt-10 desktop:hidden block'></div>
      <div className='tech-infos min-h-[50vh] desktop:mt-16 mt-8 flex desktop:flex-row flex-col items-center gap-12 desktop:w-[50%] w-full desktop:px-0 px-6 desktop:text-left text-center'>
        <nav className='tablet:mt-0 mt-6'>
          <ul className='flex desktop:flex-col gap-8'>
            {
              technology.map((tech, index) => {
                return <NavLink
                  to={`/technology/${tech.name}`}
                  activeclassname='active'
                  className='tech-nav-link tablet:h-20 tablet:w-20 h-16 w-16 rounded-full bg-transparent 
                                    border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition
                                     text-white flex justify-center items-center'
                >
                  <span className='tablet:text-heading-4 text-heading-5 font-bellefair'>{index + 1}</span>
                </NavLink>
              })
            }
          </ul>
        </nav>
        <Outlet context={[setCurrentTechnologyImagePortrait, setCurrentTechnologyImageLandscape]} />
      </div>
      <img
        className='tech-img-portrait absolute right-0 top-16 h-[60vh] desktop:block hidden'
        src={currentTechnologyImagePortrait}
        alt="technology-image" />
    </div>
  )
}

export default Technology