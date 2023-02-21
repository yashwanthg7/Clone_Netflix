import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  async function fetchDataFromURL() {
    let output = await axios.get(requests.fetchNetflixOriginals);
    let movies = output.data.results;
    let randomNumber = Math.floor(Math.random() * movies.length);
    setMovie(movies[randomNumber]);
  }


  useEffect(() => {
    fetchDataFromURL();
  }, []);

  
  const backgroundStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
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
