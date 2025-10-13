import React, { createContext, useState, useEffect } from 'react';

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create the provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    // Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
    }, []);

    // Save theme whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Provide theme & setter to children
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
