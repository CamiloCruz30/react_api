import React, { useState, useEffect } from "react";
import Select from "react-select";
import News from "./components/News";
import Weather from "./components/Weather";
import "./app.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function App() {

  const [news, setNews] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [idCity, setIdCity] = useState([]);

  const options = [
    { label: "Argentina", value: "ar 3435907" },
    { label: "Austria", value: "at 2761369" },
    { label: "Australia", value: "au 2172517" },
    { label: "Belgica", value: "be 2800866" },
    { label: "Bulgaria", value: "bg 727012" },
    { label: "Brasil", value: "br 3472339" },
    { label: "Canada", value: "ca 6094817" },
    { label: "Suiza", value: "ch 3895114" },
    { label: "China", value: "cn 1850147" },
    { label: "Colombia", value: "co 3688689" },
    { label: "Cuba", value: "cu 3746183" },
    { label: "Republica Checa", value: "cz 3061378" },
    { label: "Alemania", value: "de 2950158" },
    { label: "Egipto", value: "eg 360630" },
    { label: "Francia", value: "fr 2968815" },
    { label: "Gran Bretaña", value: "gb 2643743" },
    { label: "Grecia", value: "gr 4562705" },
    { label: "Honk Kong", value: "hk 1819729" },
  ];

  useEffect(() => {
    if (searchCity.length > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${searchCity}&apiKey=5bf0491bc2664e1f8e7d560fd16a2f7d`
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log(error));
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${idCity}&appid=ec41b4861c9e30e630558de4dec6f059`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data.weather))
        .catch((error) => console.log(error));
    }
  }, [searchCity]);

  const handleChange = (dataSelect) => {
    setSearchCity(dataSelect.value.substr(0, 2));
    setIdCity(dataSelect.value.substr(3));
  };

  return (
    <Container className="main-container">
      <Box sx={{ bgcolor: "#", height: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="title">Test React-API</h1>
          </Grid>
          <Grid item xs={6}>
            <div className="content-select">
              <p>
                Seleccione una ciudad para buscar las noticias y su estado del
                tiempo.
              </p>
              <div style={{ width: "200px" }}>
                <Select options={options} onChange={handleChange} />
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Weather weather={weather} />
          </Grid>
          <News news={news} />
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
