import { Card, CardContent, Stack, Typography } from "@mui/material";
import PredictionUnit from "../Prediction-Unit/PredictionUnit";
import { WEATHER_CODE } from "../../constants/WeatherCode";
import { useTranslation } from "react-i18next";

export default function PredictionList({ weeklyWeatherTemps }) {
  const { t, i18n } = useTranslation();

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
                sm: i18n.language === "ar" ? "right" : "left",
              },
            }}
          >
            {t("Weekly Average Tempreture".toLowerCase())}
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
