import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";

const Weather = ({ weather = [] }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {weather.map((item, index) => (
            <Grid item xs={9}>
              <p className="title-weather">Estado del tiempo</p>

              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Clima: {item.main}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Descripción: {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Id: {item.id}
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 180 }}
                  image="https://lh5.googleusercontent.com/proxy/yqQDtYPUN0v0bj53Nwtf3mV06DqkiXXu303ZGR6Qc9FqjeeNhxqwciIkdRvZdUq8QV9kEdy-pUBeVcU8yVGeSM1Qg4fe7mz9fxJkM9PU_rq6bbg8HN_pPsBJHQ=w1200-h630-p-k-no-nu"
                  alt="Live from space album cover"
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Weather;
