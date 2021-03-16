import react, { useState, useEffect } from "react";
import instance from "../axios";
import requests from "../requests";
import "./row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      //   console.log(request);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "").then((url) => {
  //       const urlParams = new URLSearchParams(new URL(url).search);

  //       setTrailerUrl(urlParams.get("v"));
  //     });
  //     // .catch((error) => console.log(error));
  //   }
  // };

  return (
    <>
      <div className="row">
        <h1 className="title">{title}</h1>
        <div className="row_posters">
          {/* {containers} */}
          {movies.map((movie) => (
            <img
              // onClick={handleClick(movie)}
              key={movie.id}
              className="row__poster"
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
};
export default Row;
