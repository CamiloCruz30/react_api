import React, { useState, useEffect } from "react";
import Select from "react-select";
import News from "./components/News";

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
    <div>
      <h1>Test</h1>
      <div style={{ width: "200px" }}>
        <Select options={options} onChange={handleChange} />
      </div>
      <News news={news} />
    </div>
  );
}

export default App;
