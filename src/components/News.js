import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const News = ({ news = [] }) => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {news.map((item, index) => (
            <Grid className="grid-card" item xs={6}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.primay"
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.urlToImage}
                />
                <Typography variant="h5" component="div">
                  {item.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Published at: {item.publishedAt}
                </Typography>
                <Typography variant="body2">{item.content}</Typography>
                <a href={item.url}>Ver noticia completa</a>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default News;
