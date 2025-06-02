import { useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import moment from "moment";
import { LanguageContext } from "./LanguageContext";

export default function AppThemeProvider({ children }) {
  const { currentLanguage } = useContext(LanguageContext);

  const sixPM = moment().set({ hour: 18, minute: 0, second: 0 });

  const theme = createTheme({
    palette: {
      primary: { main: "#2F89FC" },
      secondary: { main: "#A0E4F1" },
      error: { main: "#FF1E00" },
      text: {
        primary: moment().isBefore(sixPM) ? "#40514E" : "#F5F5F5",
      },
      background: {
        default: moment().isBefore(sixPM) ? "#F5F5F5" : "#121212",
        paper: moment().isBefore(sixPM) ? "#F5F5F5" : "#121212",
      },
    },
    typography: {
      fontFamily: currentLanguage === "en" ? "Poppins" : "IBM Plex Sans Arabic",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
