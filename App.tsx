import { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import Home from "./src/pages/Home";
import { darkTheme, lightTheme } from "./src/themes";

export default function App() {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = async () => {
    const themeValue = theme === "dark" ? "light" : "dark";
    setTheme(themeValue);
  };
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Home switcher={toggleTheme} />
    </ThemeProvider>
  );
}
