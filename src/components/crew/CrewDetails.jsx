import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import data from '../../data/data.json'
import { useOutletContext } from 'react-router';

const { crew } = data;

const CrewDetails = () => {
  const { crewMemberName } = useParams();
  const currentCrewMember = typeof crewMemberName === 'undefined' ? crew[0] : crew.filter(member => member.name === crewMemberName)[0];
  const [setCurrentCrewImage] = useOutletContext();

  useEffect(
    () => {
      setCurrentCrewImage(currentCrewMember.images.png);
    }, [currentCrewMember]
  )
  return (
    <div>
      <p className='text-heading-4 font-bellefair uppercase opacity-[0.5042] '>{currentCrewMember.name} </p>
      <p className='text-heading-3 font-bellefair uppercase'>{currentCrewMember.role} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue pr-8 mt-6'>
        {currentCrewMember.bio}
      </p>
    </div>
  )
}

export default CrewDetails