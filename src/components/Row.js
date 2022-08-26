import React, { useState, useEffect } from "react";
import axios from "../function/axios";
import classes from "./Row.module.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imageBaseURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const { title, fetchURL, isLargeRow } = props;
  // console.log(props)

  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    // fetch data from tmdb
    axios.get(fetchURL).then((request) => {
      //   console.log(request.data.results);
      setMovies(request.data.results);
    });
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  //   get movie trailer on click
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU we want to get XtMThy8QKqU from the link
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className={classes.row}>
      <h2 className={classes.row__title}>{title}</h2>

      <div className={classes.row__posters}>
        {movies &&
          movies.map((movie) => {
            return (
              <img
                onClick={() => handleClick(movie)}
                className={`${classes.row__poster} ${
                  isLargeRow && classes.row__poster_large
                }`}
                src={`${imageBaseURL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.title}
                key={movie.id}
              />
            );
          })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
