import { Card, CardContent, Typography } from "@mui/material";
import moment from "moment";

export default function PredictionUnit({ date, temp, image }) {
  return (
    <>
      <Card>
        <CardContent>
          <img
            src={image.icon}
            alt={image.label}
            width={"100%"}
            height={"100px"}
          />
          <Typography variant="h6" component="p" textAlign="center">
            {moment(date).format("ddd")}
          </Typography>
          <Typography variant="h6" component="p" textAlign="center">
            {temp}° C
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
