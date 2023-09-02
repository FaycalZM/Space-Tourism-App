import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import data from '../../data/data.json'
import { useOutletContext } from 'react-router';

const { crew } = data;

const CrewDetails = () => {
  const { crewMemberName } = useParams();
  const currentCrewMember = crew.filter(member => member.name === crewMemberName)[0];
  const [setCurrentCrewImage] = useOutletContext();

  useEffect(
    () => {
      setCurrentCrewImage(currentCrewMember ? currentCrewMember.images.png : null);
    }, [currentCrewMember]
  )
  return (
    <div>
      <p className='text-heading-4 font-bellefair uppercase opacity-[0.5042] '>{currentCrewMember ? currentCrewMember.name : null} </p>
      <p className='text-heading-3 font-bellefair uppercase'>{currentCrewMember ? currentCrewMember.role : null} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue pr-8 mt-6'>
        {currentCrewMember ? currentCrewMember.bio : null}
      </p>
    </div>
  )
}

export default CrewDetails