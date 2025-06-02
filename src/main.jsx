import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./context/ThemeContext.js";
import "./i18n";
import LanguageProvider from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </LanguageProvider>
);
