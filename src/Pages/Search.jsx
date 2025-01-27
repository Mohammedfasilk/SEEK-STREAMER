import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, imgUrl } from "../Constants/Urls";

function Search() {
  const [keyword, setKeyword] = useState("");
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=${API_KEY}&query=${keyword}`
      )
      .then((response) => {
        setMovie(response.data.results);
        console.log(response.data.results);
        console.log("ok");
      });
  }, [keyword]);

  return (
    <section>
      <div className="bg-neutral-900 flex  items-center flex-col min-h-screen pt-20 px-6 lg:p-10">
        <input
          className="bg-neutral-700 text-white rounded-md p-2 lg:p-3 w-full max-w-[500px]"
          placeholder="Search Here"
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 p-5 sm:p-10  gap-2">
          {movie.map((obj) => {
            return (
              <div
                className={
                  obj.backdrop_path === null
                    ? "hidden"
                    : "min-w-[200px] sm:max-w-[300px]  rounded-lg bg-neutral-800 flex flex-col max-h-[250px] items-center overflow-hidden text-white"
                }
              >
                <img
                  onClick={() => wathTrailer(obj.id)}
                  className=" max-h-[150px] w-full"
                  src={`${imgUrl + obj.backdrop_path}`}
                  alt=""
                />
                <div className="flex items-center text-xs sm:text-base p-2">
                  <h1>{obj.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Search;
