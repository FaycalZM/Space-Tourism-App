import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className='absolute desktop:mt-32 tablet:mt-16 w-full h-full desktop:h-[80%] desktop:pl-32 '>
            {children}
        </div>
    )
}

export default Layout