import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import moment from "moment-timezone";

export default function WeatherDetails({ weather, timezone }) {
  const mainWeather = weather.weather[0].main;
  const location = weather.name;
  const windSpeed = weather.wind.speed;
  const { temp, humidity } = weather.main;

  return (
    <>
      <Grid container>
        <Grid size={8}>
          <Box>
            <Typography variant="h3" component="h1">
              {location}
            </Typography>
            <Typography variant="h5" component="h2">
              {/* Try to fetch the time in the location entered via user... */}
              {moment().tz(timezone).format("dddd hh:mm A")}
            </Typography>
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography variant="h4" component="p">
              {temp}° C
            </Typography>
            <Typography variant="subtitle1" component="p">
              {mainWeather}
            </Typography>
            <Typography variant="subtitle1" component="p">
              Humidity: {humidity}%
            </Typography>
            <Typography variant="subtitle1" component="p">
              Wind Speed: {windSpeed} m/s
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
