import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const News = ({ news = [] }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <p className="title-news">Noticias más recientes </p>

      <Grid container spacing={2}>
        {news.map((item, index) => (
          <Grid item xs={6}>
            <Card className="grid-card">
              <CardMedia component="img" height="300" image={item.urlToImage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Published at: {item.publishedAt}
                </Typography>
                <Typography variant="body2">{item.content}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" href={item.url}>
                  Leer más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
