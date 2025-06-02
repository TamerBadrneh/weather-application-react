import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./context/ThemeContext.js";
import "./i18n";

createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </>
);
