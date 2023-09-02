import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router'
import data from '../../data/data.json'

const { technology } = data;

const TechnologyDetails = () => {
  const { technologyName } = useParams();
  const currentTechnology = technology.filter(tech => tech.name === technologyName)[0];

  const [setCurrentDestinationImagePortrait, setCurrentTechnologyImageLandscape] = useOutletContext();

  useEffect(
    () => {
      setCurrentDestinationImagePortrait(currentTechnology ? currentTechnology.images.portrait : null);
      setCurrentTechnologyImageLandscape(currentTechnology ? currentTechnology.images.landscape : null);
    }, [currentTechnology]
  )
  return (

    <div >
      <p className='text-base font-barlow-condensed text-very-light-grayish-blue tracking-md'>THE TERMINOLOGY…</p>
      <p className='desktop:text-heading-3 text-[46px] desktop:my-0 my-4 font-bellefair text-white uppercase'>{currentTechnology ? currentTechnology.name : null} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue desktop:w-auto w-3/4 mx-auto'>
        {currentTechnology ? currentTechnology.description : null}
      </p>
    </div>

  )
}

export default TechnologyDetails