import { useState, useEffect } from "react";
import Container from "./AppContainer";

const App = () => {
  const [bogota, setBogota] = useState({
    current: {
      temp: "",
      weather: "",
      icon: "",
    },
    day1: {
      icon: "",
      day: "",
      weather: "",
      tempMax: "",
      tempMin: "",
    },
    day2: {
      icon: "",
      day: "",
      weather: "",
      tempMax: "",
      tempMin: "",
    },
    day3: {
      icon: "",
      day: "",
      weather: "",
      tempMax: "",
      tempMin: "",
    },
  });
  const [lyon, setLyon] = useState({
    icon: "",
    temp: "",
    humidity: "",
    direction: "",
    speed: "",
  });
  const [paris, setParis] = useState({
    icon: "",
    temp: "",
    humidity: "",
    direction: "",
    speed: "",
  });
  async function request(url) {
    const sendURL = `${url}`;
    let response;
    let data;
    try {
      response = await fetch(sendURL);
      data = await response.json();
    } catch (error) {
      data = { ok: "false" };
    }
    return data;
  }
  const getDayinLetters = (unix) => {
    var date = new Date(unix * 1000);
    const day = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };
    return day[date.getDay()];
  };
  const getDirectioninLetters = (direction) => {
    if (direction < 22.5) {
      return "East";
    }
    if (direction < 67.5) {
      return "Northeast";
    }
    if (direction < 112.5) {
      return "North";
    }
    if (direction < 157.5) {
      return "Northwest";
    }
    if (direction < 202.5) {
      return "West";
    }
    if (direction < 247.5) {
      return "Southwest";
    }
    if (direction < 292.5) {
      return "South";
    }
    if (direction < 337.5) {
      return "Southeast";
    } else {
      return "East";
    }
  };
  useEffect(() => {
    // const appid = "ee63f17d0812e6f2b3f501a3442f7f13";
    const appid = "ac74c8b3a838f1c533379d4c0ce52ac1";
    async function fetchData() {
      // Datos de Bogotá
      const bogotaData = await request(
        `https://api.openweathermap.org/data/2.5/onecall?exclude=minutely,hourly&appid=${appid}&units=metric&lat=4.6097&lon=-74.0817`
      );
      setBogota({
        ...bogota,
        current: {
          temp: `${Math.trunc(bogotaData.current.temp)}`,
          weather: `${bogotaData.current.weather[0].main}`,
          icon: `http://openweathermap.org/img/wn/${bogotaData.current.weather[0].icon}@2x.png`,
        },
        day1: {
          icon: `http://openweathermap.org/img/wn/${bogotaData.daily[1].weather[0].icon}@2x.png`,
          day: `${getDayinLetters(bogotaData.daily[1].dt)}`,
          weather: `${bogotaData.daily[1].weather[0].main}`,
          tempMax: `${Math.trunc(bogotaData.daily[1].temp.max)}`,
          tempMin: `${Math.trunc(bogotaData.daily[1].temp.min)}`,
        },
        day2: {
          icon: `http://openweathermap.org/img/wn/${bogotaData.daily[2].weather[0].icon}@2x.png`,
          day: `${getDayinLetters(bogotaData.daily[2].dt)}`,
          weather: `${bogotaData.daily[2].weather[0].main}`,
          tempMax: `${Math.trunc(bogotaData.daily[2].temp.max)}`,
          tempMin: `${Math.trunc(bogotaData.daily[2].temp.min)}`,
        },
        day3: {
          icon: `http://openweathermap.org/img/wn/${bogotaData.daily[3].weather[0].icon}@2x.png`,
          day: `${getDayinLetters(bogotaData.daily[3].dt)}`,
          weather: `${bogotaData.daily[3].weather[0].main}`,
          tempMax: `${Math.trunc(bogotaData.daily[3].temp.max)}`,
          tempMin: `${Math.trunc(bogotaData.daily[3].temp.min)}`,
        },
      });
      // Datos de Lyon
      const lyonData = await request(
        `https://api.openweathermap.org/data/2.5/weather?q=Lyon&appid=${appid}&units=metric`
      );
      setLyon({
        ...lyon,
        icon: `http://openweathermap.org/img/wn/${lyonData.weather[0].icon}@2x.png`,
        temp: `${Math.trunc(lyonData.main.temp)}`,
        humidity: `${lyonData.main.humidity}`,
        direction: `${getDirectioninLetters(lyonData.wind.deg)}`,
        speed: `${lyonData.wind.speed}`,
      });
      // Datos de Paris
      const parisData = await request(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${appid}&units=metric`
      );
      setParis({
        ...paris,
        icon: `http://openweathermap.org/img/wn/${parisData.weather[0].icon}@2x.png`,
        temp: `${Math.trunc(parisData.main.temp)}`,
        humidity: `${parisData.main.humidity}`,
        direction: `${getDirectioninLetters(parisData.wind.deg)}`,
        speed: `${parisData.wind.speed}`,
      });
    }
    fetchData();
  }, []);
  return <Container bogota={bogota} lyon={lyon} paris={paris} />;
};

export default App;
