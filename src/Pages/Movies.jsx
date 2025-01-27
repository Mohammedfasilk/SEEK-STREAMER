import React from "react";
import MovieCard from "../Component/MovieCard";
import {
  action,
  Adventure,
  Animation,
  comedy,
  Crime,
  Documentary,
  Drama,
  Fanatasy,
  Horror,
  SciFI,
  Thriller,
  TrendingMovies,
  War,
} from "../Constants/Genresurl";
import Banner from "../Component/Banner";

function Movies() {
  const showGenres = () => {
    let element = document.querySelector(".genres");
    element.classList.remove("hidden");
  };
  const hideGenres = () => {
    let element = document.querySelector(".genres");
    element.classList.add("hidden");
  };
  return (
    <>
      <Banner link={TrendingMovies} />

      <section className="bg-neutral-900 lg:pl-20">
        <div className="flex justify-center p-10">
          <div
            className="absolute bg-neutral-900 w-fit text-center px-10 border rounded-lg"
            onMouseEnter={showGenres}
            onMouseLeave={hideGenres}
          >
            <h1 className="text-xl md:text-[22px] text-white">Genres</h1>
            <ul className="genres hidden text-white">
              <li className="hover:bg-neutral-800">
                <a href="#Action">Action</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Thriller">Thriller</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Comedy">Comedy</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Adventure">Adventure</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Horror">Horror</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Scifi">Sci-Fi</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Drama">Drama</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Animation">Animation</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Fantasy">Fantasy</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#War">War</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Documentry">Documentry</a>
              </li>
              <li className="hover:bg-neutral-800">
                <a href="#Crime">Crime</a>
              </li>
            </ul>
          </div>
        </div>
        <MovieCard url={action} title="Action" id="Action" />
        <MovieCard url={Thriller} title="Thriller" id="Thriller" />
        <MovieCard url={comedy} title="Comedy" id="Comedy" />
        <MovieCard url={Adventure} title="Adventure" id="Adventure" />
        <MovieCard url={Horror} title="Horror" id="Horror" />
        <MovieCard url={SciFI} title="Sci-fi" id="Scifi" />
        <MovieCard url={Drama} title="Drama" id="Drama" />
        <MovieCard url={Animation} title="Animation" id="Animation" />
        <MovieCard url={Fanatasy} title="Fantasy" id="Fantasy" />
        <MovieCard url={War} title="War" id="War" />
        <MovieCard url={Documentary} title="Documentry" id="Documentry" />
        <MovieCard url={Crime} title="Crime" id="Crime" />
      </section>
    </>
  );
}

export default Movies;
