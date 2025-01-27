import axios from "axios";
import React, { useEffect } from "react";
import { API_KEY } from "../Constants/Urls";
import Banner from "../Component/Banner";
import {
  PopularSeries,
  SeriesAiring,
  TopRatedSeries,
  Trendingseries,
} from "../Constants/Genresurl";
import MovieCard from "../Component/MovieCard";

function TvSeries() {
  return (
    <>
      <Banner link={Trendingseries} />
      <section className="bg-neutral-900 lg:pl-20">
        <MovieCard url={SeriesAiring} title="Airing Today" />
        <MovieCard url={TopRatedSeries} title="Top Rated" />
        <MovieCard url={PopularSeries} title="Popular" />
      </section>
    </>
  );
}

export default TvSeries;
