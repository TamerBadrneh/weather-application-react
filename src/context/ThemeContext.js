import { createTheme } from "@mui/material";
import moment from "moment";

const now = moment();
const sixPM = moment().set({ hour: 18, minute: 0, second: 0 });

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F89FC",
    },
    secondary: {
      main: "#A0E4F1",
    },
    error: {
      main: "#FF1E00",
    },
    text: {
      primary: now.isBefore(sixPM) ? "#40514E" : "#F5F5F5",
    },
    background: {
      default: now.isBefore(sixPM) ? "#F5F5F5" : "#121212",
      paper: now.isBefore(sixPM) ? "#F5F5F5" : "#121212",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
