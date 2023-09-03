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
      <p className='tablet:text-heading-4 text-[20px] font-bellefair uppercase opacity-[0.5042] '>{currentCrewMember ? currentCrewMember.name : null} </p>
      <p className='tablet:text-heading-3 text-[36px] font-bellefair uppercase'>{currentCrewMember ? currentCrewMember.role : null} </p>
      <p className='text-body-text/8 font-barlow text-very-light-grayish-blue desktop:pl-0 desktop:pr-8 tablet:px-16 mt-6'>
        {currentCrewMember ? currentCrewMember.bio : null}
      </p>
    </div>
  )
}

export default CrewDetails