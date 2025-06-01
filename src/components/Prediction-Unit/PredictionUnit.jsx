import { Card, CardContent, Typography } from "@mui/material";
import moment from "moment";

export default function PredictionUnit({ date, temp, forecastData }) {
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
          <Typography variant="h6" component="p" textAlign="center">
            {moment(date).format("ddd")}
          </Typography>
          <Typography variant="h6" component="p" textAlign="center">
            {forecastData.label}
          </Typography>
          <Typography variant="h6" component="p" textAlign="center">
            {temp}° C
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
