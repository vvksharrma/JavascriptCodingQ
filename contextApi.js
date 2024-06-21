// ThemeContext.js
import React, { createContext, useState } from 'react';

// Create a context object
export const ThemeContext = createContext();

// Create a provider for the context
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

//inside component
const {theme,toggleTheme} =useContext(ThemeContext)

//wrap app.js into ThemeProvider
{/* <ThemeProvider>
    <App/>
</ThemeProvider> */}