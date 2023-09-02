import React, { useEffect } from 'react'
import { useData } from '../../context/DataProvider';

const Technology = () => {
    const { changeMainPageBackground } = useData();

    useEffect(
        () => {
            changeMainPageBackground('/technology/background-technology')
        }, []
    )
    return (
        <div>Technology</div>
    )
}

export default Technology