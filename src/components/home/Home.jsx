import React, { useEffect } from 'react'
import './home.css'
import { useNavigate } from 'react-router';
import { useData } from '../../context/DataProvider';

const Home = () => {

  const navigate = useNavigate();
  const { changeMainPageBackground } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/home/background-home');
    }, []
  )
  return (
    <div className="flex justify-around py-32">
      <div className='w-min'>
        <p className='text-heading-5 font-barlow-condensed text-very-light-grayish-blue tracking-lg uppercase'>so, you want to travel to</p>
        <p className='text-heading-1 font-bellefair uppercase'>space</p>
        <p className='text-body-text/8 font-barlow text-very-light-grayish-blue'>
          Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover
          kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
        </p>
      </div>
      <div className='w-fit'>
        <div className='outer-c pointer-events-none float-right w-[450px] h-[450px] rounded-full bg-white bg-opacity-0 hover:bg-opacity-[0.1036] transition duration-300 ease-in flex justify-center items-center'>
          <button
            onClick={() => {
              navigate("/destination");
            }}
            className='inner-c pointer-events-auto  w-[274px] h-[274px] rounded-full bg-white text-very-dark-blue text-heading-4 font-bellefair'>EXPLORE</button>
        </div>
      </div>

    </div>
  )
}

export default Home