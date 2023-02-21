import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  async function fetchData() {
    let response = await axios.get(requests.fetchNetflixOriginals);
    let movies = response.data.results;
    let randomNumber = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomNumber]);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
  };

  return (
    <header className="banner" style={backgroundStyle}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie.name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{movie.overview}</p>

      </div>
    </header>

  );
};

export default Banner;
