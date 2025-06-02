import { Card, CardContent, Typography } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";

export default function PredictionUnit({ date, temp, forecastData }) {
  const { t } = useTranslation();

  return (
    <>
      <Card sx={{ my: "8px" }}>
        <CardContent>
          <img
            src={forecastData.icon}
            alt={forecastData.label}
            width={"100px"}
            height={"100px"}
          />
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            fontWeight="light"
            fontSize="1rem"
          >
            {t(moment(date).format("ddd").toLowerCase())}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            fontWeight="light"
            fontSize="1rem"
          >
            {t(forecastData.label.toLowerCase())}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            textAlign="center"
            fontWeight="light"
            fontSize="1rem"
          >
            {temp}° C
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
