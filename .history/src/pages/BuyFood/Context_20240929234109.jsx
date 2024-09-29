import React, { createContext, useState } from "react";

export const SimpleContext = createContext();

export const SimpleProvider = ({ children }) => {
    const [value, setValue] = useState('Hello');

    return (
        <SimpleContext.Provider value={{ value, setValue }}>
            {children}
        </SimpleContext.Provider>
    );
};
