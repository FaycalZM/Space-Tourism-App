
import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [backgroundImage, setBackgroundImage] = useState('home-desktop');
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const primary_route_transition = {
        type: "spring",
        stiffness: 200,
        bounce: 0.25,
        delay: 0.1
    }
    const primary_route_variants = {
        initial: {
            opacity: 0,
            y: -100
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 100
        },
    }


    const toggleMenu = () => {
        setIsMenuOpened(prevState => !prevState);
    }

    const closeMenu = () => {
        setIsMenuOpened(false);
    }

    const changeMainPageBackground = (newBackgroundImage) => {
        setBackgroundImage(newBackgroundImage);
    }

    return <DataContext.Provider value={{
        backgroundImage,
        isMenuOpened,
        primary_route_transition,
        primary_route_variants,
        toggleMenu,
        closeMenu,
        changeMainPageBackground,
        setBackgroundImage
    }}>
        {children}
    </DataContext.Provider>
}


export default DataProvider