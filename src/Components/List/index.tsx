import React from "react";
import MovieCard, { IMovieCard } from "../Card";

interface IMovies {
  movies: Array<IMovieCard>;
}

export default function Movies(props: IMovies) {
  const { movies } = props;
  return (
    <div className="row">
      {movies.map((item: any) => (
        <MovieCard
          title={item.Title}
          year={item.Year}
          imdbID={item.imdbID}
          type={item.Type}
          poster={item.Poster}
          rank={item.rank}
        />
      ))}
    </div>
  );
}
