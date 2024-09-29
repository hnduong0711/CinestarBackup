import React, { createContext, useState } from "react";



export const CinemaProvider = ({ children }) => {
    const [selectedCinema, setSelectedCinema] = useState('');

    return (
        <CinemaContext.Provider value={{ selectedCinema, setSelectedCinema }}>
            {children}
        </CinemaContext.Provider>
    );
};

export const CinemaContext = createContext();
