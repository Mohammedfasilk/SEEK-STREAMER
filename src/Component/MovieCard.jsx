import React from "react";
import axios from "/src/Constants/Axios.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { imgUrl, API_KEY } from "../Constants/Urls";
import YouTube from "react-youtube";
function MovieCard(props) {
  let [Urlid, setUrlId] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const wathTrailer = (id) => {
    console.log(id);
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US `)
      .then((response) => {
        setUrlId(response.data.results[0]);
      });
  };

  const opts = {
    height: "390",
    minwidth: "50%",
    playerVars: {
      autoplay: 1,
    },
  };

  const OnEnd = () => {
    setUrlId("");
  };
  return (
    <>
      <section className=" px-10 lg:px-10" id={props.id}>
        <div className="py-5 ">
          <h1 className="text-xl sm:text-[22px] text-white font-semibold">
            {props.title}
          </h1>
        </div>
        <div className="flex overflow-scroll scrollbar-hide scroll-smooth min-h-[130px] gap-2">
          {movies.map((obj) => (
            <img
              onClick={() => wathTrailer(obj.id)}
              className="rounded-lg w-full sm:h-[200px] lg:h-[150px] text-white"
              src={`${imgUrl + obj.backdrop_path}`}
              alt=""
            />
          ))}
        </div>
        <div className="mt-5 w-full flex justify-center">
          {Urlid && (
            <YouTube
              opts={opts}
              videoId={Urlid.key}
              onEnd={OnEnd}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default MovieCard;
