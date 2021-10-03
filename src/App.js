import React, { useState, useEffect } from "react";
import Select from "react-select";
import News from "./components/News";
import "./app.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function App() {
  const [news, setNews] = useState([]);

  const options = [
    { label: "Argentina", value: "ae" },
    { label: "United Arab Emirates", value: "ar" },
    { label: "Austria", value: "at" },
    { label: "Australia", value: "au" },
    { label: "Belgica", value: "be" },
    { label: "Bulgaria", value: "bg" },
    { label: "Brasil", value: "br" },
    { label: "Canada", value: "ca" },
    { label: "Suiza", value: "ch" },
    { label: "China", value: "cn" },
    { label: "Colombia", value: "co" },
    { label: "Cuba", value: "cu" },
    { label: "Republica Checa", value: "cz" },
    { label: "Alemania", value: "de" },
    { label: "Egipto", value: "eg" },
    { label: "Francia", value: "fr" },
    { label: "Gran Bretaña", value: "gb" },
    { label: "Grecia", value: "gr" },
    { label: "Honk Kong", value: "hk" },
  ];

  const [searchCity, setSearchCity] = useState("");

  useEffect(() => {
    if (searchCity.length > 1) {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=${searchCity}&apiKey=5bf0491bc2664e1f8e7d560fd16a2f7d`
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles))
        .catch((error) => console.log(error));
    }
  }, [searchCity]);

  const handleChange = (dataSelect) => {
    setSearchCity(dataSelect.value);
  };

  return (
    <Container>
      <Box sx={{ bgcolor: "#cfe8fc", height: "100%" }}>
        <h1 className="title">Test React-API</h1>
        <div className="content-select">
          <p>
            Seleccione una ciudad para buscar las noticias y su estado del
            tiempo.
          </p>
          <div style={{ width: "200px" }}>
            <Select options={options} onChange={handleChange} />
          </div>
        </div>

        <News news={news} />
      </Box>
    </Container>
  );
}

export default App;
