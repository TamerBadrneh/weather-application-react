import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AppThemeProvider from "./context/ThemeContext.jsx";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </>
);
