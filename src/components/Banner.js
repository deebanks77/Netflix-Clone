import React, { useState, useEffect } from "react";
import axios from "../function/axios";
import request from "../function/request";
import classes from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // fetch a movie for banner
    axios.get(request.fetchNetflixOriginals).then((request) => {
      //   to get a random movie from the array of movies
      const random = Math.floor(Math.random() * request.data.results.length);
      setMovie(request.data.results[random]);
    });
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n) + "..." : str;
  }

  //   console.log(movie);

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner__contents}>
        {/* Title */}
        <h1 className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* buttons >> 2 */}
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>
        </div>

        {/* description */}
        <h1 className={classes.banner__description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={classes.banner__fadeButton} />
    </header>
  );
}

export default Banner;
