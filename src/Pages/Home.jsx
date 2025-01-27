import React from "react";
import { action } from "/src/Constants/Genresurl.jsx";
import Banner from "../Component/Banner";
import MovieCard from "../Component/MovieCard";
import {
  comedy,
  Horror,
  PopularSeries,
  TopRatedSeries,
  Trending,
} from "../Constants/Genresurl";
function Home() {
  return (
    <main className="flex">
      <section>
        <Banner link={Trending} />
        <section className="bg-neutral-900 lg:pl-20 font-bold">
          <div className="flex justify-center">
            <h1 className="text-white text-2xl sm:text-[30px] py-10">
              TV Series
            </h1>
          </div>
          <MovieCard url={PopularSeries} title="Popular" />
          <MovieCard url={TopRatedSeries} title="Top Rated" />
        </section>
        <section className="bg-neutral-900 lg:pl-20">
          <div className="flex justify-center w-full">
            <h1 className="text-white text-2xl sm:text-[30px] py-10 font-bold">
              Movies
            </h1>
          </div>
          <MovieCard url={action} title="Action Movies" />
          <MovieCard url={comedy} title="Comedy Movies" />
          <MovieCard url={Horror} title="Horror Movies" />
        </section>
      </section>
    </main>
  );
}

export default Home;
