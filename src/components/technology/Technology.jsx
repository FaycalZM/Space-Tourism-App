import React, { useEffect, useState } from 'react'
import { useData } from '../../context/DataProvider';
import data from '../../data/data.json'
import { NavLink, Outlet } from 'react-router-dom';
import './technology.css'

const { technology } = data;

const Technology = () => {
    const [currentTechnologyImage, setCurrentTechnologyImage] = useState(technology[0].images.portrait);
    const { changeMainPageBackground } = useData();

    useEffect(
        () => {
            changeMainPageBackground('/technology/background-technology')
        }, []
    )
    return (
        <div className='py-6 pl-2 relative '>
            <p className='text-heading-5 font-barlow-condensed text-white tracking-lg uppercase'><span className='opacity-25 mr-7 font-bold'>03</span>space launch 101</p>
            <div className='mt-16 flex items-center gap-12 w-[50%]'>
                <nav>
                    <ul className='flex flex-col gap-8'>
                        {
                            technology.map((tech, index) => {
                                return <NavLink
                                    to={`/technology/${tech.name}`}
                                    activeclassname='active'
                                    className='tech-nav-link h-20 w-20 rounded-full bg-transparent 
                                    border-[1px] border-white border-opacity-25 hover:border-opacity-100 transition
                                     text-white flex justify-center items-center'
                                >
                                    <span className='text-heading-4 font-bellefair'>{index}</span>
                                </NavLink>
                            })
                        }
                    </ul>
                </nav>
                <Outlet context={[setCurrentTechnologyImage]} />
                <div>

                </div>
            </div>
            <img
                className='absolute right-0 top-16 h-[60vh]'
                src={currentTechnologyImage}
                alt="technology-image" />
        </div>
    )
}

export default Technology