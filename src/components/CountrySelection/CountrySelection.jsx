import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";

export default function CountrySelection({
  location,
  onLocationChange,
  onSearchClick,
}) {
  const { t, i18n } = useTranslation();
  const places = [
    "amman",
    "irbid",
    "zarqa",
    "balqa",
    "madaba",
    "karak",
    "tafilah",
    "ma'an",
    "aqaba",
    "jerash",
    "ajloun",
    "mafraq",
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          alignItems: "flex-end",
          justifyContent: {
            xs: "center",
            sm: "flex-start",
          },
        }}
      >
        <FormControl
          variant="standard"
          sx={{
            width: { xs: "70%", md: "60%" },
            "& .MuiInputLabel-root": {
              color: (theme) => theme.palette.text.primary,
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: (theme) => theme.palette.primary.main,
            },
            "& .MuiInput-underline:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: (theme) => theme.palette.text.primary,
            },
          }}
        >
          <InputLabel>{t("select location")}</InputLabel>
          <Select
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
          >
            {places.map((place) => (
              <MenuItem
                sx={{ direction: i18n.language === "ar" ? "rtl" : "ltr" }}
                key={place}
                value={place}
              >
                {t(place)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction="row" gap="5px" alignItems={"flex-end"}>
          <IconButton color="secondary" onClick={onSearchClick}>
            <SearchIcon color="primary" />
          </IconButton>
          <Button
            sx={{
              textTransform: "none",
              fontFamily:
                i18n.language === "en" ? "IBM Plex Sans Arabic" : "Poppins",
            }}
            variant="text"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
            }
          >
            {i18n.language === "en" ? "عربي" : "English"}
          </Button>
        </Stack>
      </Box>
    </>
  );
}
