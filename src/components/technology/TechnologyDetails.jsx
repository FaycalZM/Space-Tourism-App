import React, { useEffect } from 'react'
import { useOutletContext, useParams } from 'react-router'
import data from '../../data/data.json'

const { technology } = data;

const TechnologyDetails = () => {
  const { technologyName } = useParams();
  const currentTechnology = technology.filter(tech => tech.name === technologyName)[0];

  const [setCurrentDestinationImage] = useOutletContext();

  useEffect(
    () => {
      setCurrentDestinationImage(currentTechnology ? currentTechnology.images.portrait : null);
    }, [currentTechnology]
  )
  return (

    <div>
      <p className='text-base font-barlow-condensed text-very-light-grayish-blue tracking-md'>THE TERMINOLOGY…</p>
      <p className='text-heading-3 font-bellefair text-white uppercase'>{currentTechnology ? currentTechnology.name : null} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue'>
        {currentTechnology ? currentTechnology.description : null}
      </p>
    </div>

  )
}

export default TechnologyDetails