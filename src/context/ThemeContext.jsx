import { createTheme, ThemeProvider } from "@mui/material";
import moment from "moment";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AppThemeProvider({ children }) {
  const { i18n } = useTranslation();
  const sixPM = moment().set({ hour: 18, minute: 0, second: 0 });

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

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
      fontFamily: i18n.language === "en" ? "Poppins" : "IBM Plex Sans Arabic",
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
