import { useEffect, useState } from "react";
import { get } from "../data/dataApi";
import { MovieCard } from "./MovieCard";

import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
        console.log(data)

    });
  }, []);

  return (
    <ul className="container">
        {movies.map((movie)=>(
            <MovieCard movie={movie}/>
        ))}
    </ul>
  );
}
