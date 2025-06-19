import { createContext, useContext } from 'react';

// Create the ThemeContext with default values
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// ThemeProvider component to wrap children with the context Provider
export const ThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};