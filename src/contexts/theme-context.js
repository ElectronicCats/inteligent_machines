import React, { useState, useEffect } from 'react';

const ThemeContext = React.createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme('dark' === theme ? 'light' : 'dark');
  };
  useEffect(() => {
    const getTheme = localStorage.getItem('site_theme');
    getTheme === 'dark' ? setTheme('dark') : setTheme('light');
  }, []);

  useEffect(() => {
    localStorage.setItem('page_theme', theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }} {...props} />;
};

export const useTheme = () => React.useContext(ThemeContext);
