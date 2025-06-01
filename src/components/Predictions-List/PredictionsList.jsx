import {
  Card,
  CardContent,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import PredictionUnit from "../Prediction-Unit/PredictionUnit";
import { WEATHER_CODE } from "../../constants/WeatherCode";

export default function PredictionList({ weeklyWeatherTemps }) {
  return (
    <>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            variant="h6"
            component={"p"}
            sx={{
              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            Weekly Average Tempreture
          </Typography>
          <Stack
            direction="row"
            gap="10px"
            flexWrap="wrap"
            sx={{
              justifyContent: {
                xs: "center",
                sm: "flex-start",
              },
            }}
          >
            {weeklyWeatherTemps.daily.time.map((date, index) => (
              <PredictionUnit
                forecastData={
                  WEATHER_CODE[
                    Number(weeklyWeatherTemps.daily.weathercode[index])
                  ]
                }
                key={index}
                date={date}
                temp={weeklyWeatherTemps.daily.temperature_2m_max[index]}
              />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
