import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import data from '../../data/data.json'
import { useOutletContext } from 'react-router'

const { destinations } = data;

const DestinationDetails = () => {
  const { destinationName } = useParams();
  const currentDestination = destinations.filter(destination => destination.name === destinationName)[0];
  const [setCurrentDestinationImage] = useOutletContext();
  useEffect(
    () => {
      setCurrentDestinationImage(currentDestination ? currentDestination.images.png : null);
    }, [currentDestination]
  )
  return (
    <>
      <p className='text-heading-2 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.name : null} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue'>{currentDestination ? currentDestination.description : null} </p>
      <hr className='mt-6 opacity-[0.2] bg-very-light-grayish-blue' />
      <div className='flex gap-16 mt-4'>
        <div>
          <p className='text-subheading-2 font-barlow-condensed text-very-light-grayish-blue tracking-sm'>AVG. DISTANCE</p>
          <p className='text-subheading-1 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.distance : null} </p>
        </div>
        <div>
          <p className='text-subheading-2 font-barlow-condensed text-very-light-grayish-blue tracking-sm uppercase'>Est. travel time</p>
          <p className='text-subheading-1 font-bellefair uppercase mt-2'>{currentDestination ? currentDestination.travel : null} </p>
        </div>
      </div>
    </>
  )
}

export default DestinationDetails