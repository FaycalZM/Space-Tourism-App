
import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [backgroundImage, setBackgroundImage] = useState('home-desktop');
    const [isMenuOpened, setIsMenuOpened] = useState(false);

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
        toggleMenu,
        closeMenu,
        changeMainPageBackground,
        setBackgroundImage
    }}>
        {children}
    </DataContext.Provider>
}


export default DataProvider