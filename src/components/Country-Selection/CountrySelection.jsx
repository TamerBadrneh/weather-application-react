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
import { useEffect } from "react";

export default function CountrySelection({
  location,
  onLocationChange,
  fetch,
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

  function isArabic() {
    return i18n.language === "ar";
  }

  useEffect(() => {
    fetch();
  }, [location]);

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
                sx={{ direction: isArabic() ? "rtl" : "ltr" }}
                key={place}
                value={place}
              >
                {t(place)}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction="row" gap="5px" alignItems={"flex-end"}>
          <Button
            sx={{
              textTransform: "none",
              fontFamily: !isArabic() ? "IBM Plex Sans Arabic" : "Poppins",
            }}
            variant="text"
            onClick={() =>
              i18n.changeLanguage(i18n.language === "ar" ? "en" : "ar")
            }
          >
            {!isArabic() ? "عربي" : "English"}
          </Button>
        </Stack>
      </Box>
    </>
  );
}
