import { Box, Grid, Typography } from "@mui/material";
import moment from "moment-timezone";
import { useTranslation } from "react-i18next";

export default function WeatherDetails({ weather, timezone }) {
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
              {t(location)}
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
              {moment().tz(timezone).format("dddd hh:mm A")}
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
              {mainWeather}
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
              Humidity: {humidity}%
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
              Wind Speed: {windSpeed} m/s
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
