
import React, { createContext, useState } from "react";

export const CinemaContext = createContext();

export const CinemaProvider = ({ children }) => {
    const [selectedCinema, setSelectedCinema] = useState('');

    return (
        <CinemaContext.Provider value={{ selectedCinema, setSelectedCinema }}>
            {children}
        </CinemaContext.Provider>
    );
};