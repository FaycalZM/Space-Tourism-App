import React, { useEffect } from 'react'
import './home.css'
import { useNavigate } from 'react-router';
import { useData } from '../../context/DataProvider';
import 'animate.css'
import './home.css'
import AnimatedPage from '../AnimatedPage';

const Home = () => {

  const navigate = useNavigate();
  const { changeMainPageBackground, primary_route_transition, primary_route_variants } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/home/background-home');
    }, []
  )
  return (
    <AnimatedPage transition={primary_route_transition} variants={primary_route_variants}>
      <div className="flex desktop:flex-row flex-col desktop:justify-around pt-32 tablet:h-auto h-full justify-center items-center desktop:items-start text-center ">
        <div className='home-text tablet:w-min'>
          <p className='desktop:text-heading-5 tablet:text-[20px] text-base font-barlow-condensed text-very-light-grayish-blue desktop:tracking-lg tablet:tracking-[3.375px] tracking-md uppercase'>so, you want to travel to</p>
          <p className='tablet:text-heading-1 text-[80px] font-bellefair uppercase'>space</p>
          <p className='tablet:text-body-text/8 text-[15px]/7 font-barlow text-very-light-grayish-blue tablet:px-0 px-6'>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover
            kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
          </p>
        </div>
        <div className='w-fit'>
          <div className='explore-btn pointer-events-none float-right tablet:w-[450px] w-[246px] tablet:h-[450px] h-[246px] rounded-full bg-white bg-opacity-0 hover:bg-opacity-[0.1036] transition duration-300 ease-in flex justify-center items-center'>
            <button
              onClick={() => {
                navigate("/destination");
              }}
              className='pointer-events-auto  tablet:w-[274px] w-[150px] tablet:h-[274px] h-[150px] rounded-full bg-white text-very-dark-blue tablet:text-heading-4 text-[20px] tracking-[1.25px] font-bellefair'>EXPLORE</button>
          </div>
        </div>

      </div>
    </AnimatedPage>

  )
}

export default Home