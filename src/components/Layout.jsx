import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='absolute mt-32 w-full h-[80%] py-32 px-32'>
            {children}
        </div>
    )
}

export default Layout