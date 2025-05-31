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
          <Typography variant="h6" component={"p"}>
            Weekly Average Tempreture
          </Typography>
          <Stack direction="row" gap="10px">
            {weeklyWeatherTemps.daily.time.map((date, index) => (
              <PredictionUnit
                image={
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
