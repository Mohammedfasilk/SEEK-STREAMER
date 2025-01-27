import React from "react";
import axios from "/src/Constants/Axios.jsx";
import { imgUrl } from "../Constants/Urls";
import { useEffect } from "react";
import { useState } from "react";
import { Trendingseries } from "../Constants/Genresurl";
function Banner(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.link).then((response) => {
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length)
        ]
      );
    });
  }, []);
  return (
    <main
      style={{
        backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
      className="bg-no-repeat bg-cover"
    >
      <div className="min-h-[35vh] sm:min-h-[80vh] lg:min-h-screen w-full flex items-end p-[1rem] sm:p-[4rem]  bg-gradient-to-b from-black/85 to-neutral-900/100 via-transparent">
        <div className="text-white space-y-1 sm:space-y-5 sm:pl-10">
          <h1 className="text-[22px] sm:text-[38px] md:text-[50px] font-bold">
            {movie ? movie.title : ""}
            {movie ? movie.name : ""}
          </h1>
          <h2 className="sm:text-[26px] font-semibold">
            TMDB {movie ? movie.vote_average : ""}/10
          </h2>
          <p className="hidden lg:flex text-[20px] w-[50%]">
            {movie ? movie.overview : ""}
          </p>
        </div>
      </div>
    </main>
  );
}

export default Banner;
