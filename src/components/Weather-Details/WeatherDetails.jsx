import { Box, Grid, Typography } from "@mui/material";
import moment from "moment";
import "moment/locale/ar";
import { useTranslation } from "react-i18next";

export default function WeatherDetails({ weather }) {
  const mainWeather = weather.weather[0].main;
  const location = weather.name;
  const windSpeed = weather.wind.speed;
  const { temp, humidity } = weather.main;
  const { t, i18n } = useTranslation();

  return (
    <>
      <Grid
        container
        sx={{
          color: (theme) => theme.palette.text.primary,
        }}
      >
        <Grid size={8}>
          <Box>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                typography: {
                  xs: "h4",
                  sm: "h3",
                },
              }}
            >
              {t(location.split(" ")[0].toLowerCase())}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                typography: {
                  xs: "subtitle1",
                  sm: "h5",
                },
              }}
            >
              {moment().locale(i18n.language).format("dddd hh:mm A")}
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography
              variant="h4"
              component="p"
              sx={{
                typography: {
                  xs: "h5",
                  sm: "h4",
                },
              }}
            >
              {temp}° C
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                typography: {
                  xs: "subtitle2",
                  sm: "subtitle1",
                },
              }}
            >
              {t(mainWeather.toLowerCase())}
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                typography: {
                  xs: "subtitle2",
                  sm: "subtitle1",
                },
              }}
            >
              {t("humidity".toLowerCase())}: {humidity}%
            </Typography>
            <Typography
              variant="subtitle1"
              component="p"
              sx={{
                typography: {
                  xs: "subtitle2",
                  sm: "subtitle1",
                },
              }}
            >
              {t("wind speed")}: {windSpeed} {t("m/s")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
