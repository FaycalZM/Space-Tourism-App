
import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

const DataProvider = ({ children }) => {

    const [backgroundImage, setBackgroundImage] = useState('home-desktop');

    const changeMainPageBackground = (newBackgroundImage) => {
        setBackgroundImage(newBackgroundImage);
    }

    return <DataContext.Provider value={{
        backgroundImage,
        changeMainPageBackground,
        setBackgroundImage
    }}>
        {children}
    </DataContext.Provider>
}


export default DataProvider