import { useContext, createContext } from "react";

const ThemeContext = createContext(); // store is built

const defaultTheme = {
  main: "#00308F",
  dark: "#002D62",
  light: "#007FFF",
  grey: "#d9d9d9",
  contrastText: "#3D5E73",
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, theme }) => {
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
