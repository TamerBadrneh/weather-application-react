import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppThemeProvider from "./context/ThemeContext.jsx";
import "./i18n";
import LanguageProvider from "./context/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </LanguageProvider>
);
