import React from "react";
import CustomHeader from "../Header";

export interface IMovieCard {
  title: string;
  year: number;
  imdbID: string;
  type: string;
  poster: string;
  rank: any;
}

export default function MovieCard(props: IMovieCard) {
  const { title, year, imdbID, type, poster, rank } = props;
  return (
    <div
      className="card"
      style={{ width: "16rem", display: "inline-block", margin: "5px"}}
    >
      <img src={poster} className="card-img-top"></img>
      <div className="card-body">
        <CustomHeader text={title} />
        <h5 className="card-title">Year Created: {year}</h5>
        <h5 className="card-title">Type: {type}</h5>
        <p className="card-text">{Rank(rank)}</p>
        <a
          href={"https://www.imdb.com/title/" + imdbID}
          className="btn btn-info"
        >
          IMDB
        </a>
      </div>
    </div>
  );
}

function Rank(props: any) {
  switch (true) {
    case props === 1:
      return <React.Fragment>⭐</React.Fragment>;
    case props === 2:
      return <React.Fragment>⭐⭐</React.Fragment>;
    case props === 3:
      return <React.Fragment>⭐⭐⭐</React.Fragment>;
    case props === 4:
      return <React.Fragment>⭐⭐⭐⭐</React.Fragment>;
    case props === 5:
      return <React.Fragment>⭐⭐⭐⭐⭐</React.Fragment>;
  }
}