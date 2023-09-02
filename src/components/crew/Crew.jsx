import React, { useEffect } from 'react'
import { useData } from '../../context/DataProvider';


const Crew = () => {
  const { changeMainPageBackground } = useData();

  useEffect(
    () => {
      changeMainPageBackground('/crew/background-crew');
    }, []
  )
  return (
    <div>Crew</div>
  )
}

export default Crew