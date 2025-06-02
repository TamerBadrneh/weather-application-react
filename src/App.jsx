import { Box, CircularProgress, Container, Stack } from "@mui/material";
import PredictionList from "./components/Predictions-List/PredictionsList";
import WeatherDetails from "./components/Weather-Details/WeatherDetails";
import CountrySelection from "./components/CountrySelection/CountrySelection";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function App() {
  const [location, setLocation] = useState("amman");
  const [weather, setWeather] = useState(null);
  const [weeklyWeatherTemps, setWeeklyWeatherTemps] = useState(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.toLowerCase()}&units=metric&appid=e3d421a633c807e36f01f8b2af025430`
      )
      .then((response) => {
        let data = response.data;
        fetchWeeklyWeatherTemps(data.coord.lon, data.coord.lat);
        setWeather(data);
      })
      .catch((error) => console.log(error));
  };

  const fetchWeeklyWeatherTemps = (longitude, latitude) => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`
      )
      .then((response) => setWeeklyWeatherTemps(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "60px",
          minHeight: "100vh",
          py: "80px",
        }}
      >
        {weather && weeklyWeatherTemps ? (
          <>
            <CountrySelection
              location={location}
              onLocationChange={(value) => setLocation(value)}
              onSearchClick={() => fetchWeather()}
            />

            <WeatherDetails weather={weather} />

            <PredictionList weeklyWeatherTemps={weeklyWeatherTemps} />
          </>
        ) : (
          <Stack justifyContent="center" alignItems="center">
            <CircularProgress />
          </Stack>
        )}
      </Container>
    </Box>
  );
}
