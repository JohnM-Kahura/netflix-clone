import react, { useState, useEffect } from "react";
import requests from "../requests";
import instance from "../axios";
import "./banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";
const Bannner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.fetchNetflixOriginals);
      //   console.log(
      //     request.data.results[
      //       Math.floor(Math.random() * request.data.results.length)
      //     ]
      //   );

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }
    fetchData();
  }, []);
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${movie.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1 className="banner_description">{movie.overview}</h1>
        </div>
        <div className="banner_FadeBottom" />
      </header>
    </>
  );
};
export default Bannner;
