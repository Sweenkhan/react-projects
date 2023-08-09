import React, { useEffect, useState } from "react";
import "./App.css"; 
import instance from "./Baseurl";

function Row(props) {

  const basImage = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovie] = useState([]);

  useEffect(() => {

    instance.get(props.moviee)
    .then((response) => {
      setMovie(response.data.results);
    });


  }, [props.moviee]);

  return (
    <>
      <div className="row">
        <h2>{props.name}</h2>
        <div className="fullRow"> 
        {
         movies.map((movie) => {
          return (
            <div className="movieTag"> 
            <img
              src={basImage + movie.poster_path}
              alt={movie.name}
              key={movie.index}
            />
            </div> 
          );
        })
        }
      </div>
      </div>
    </>
  );
}

export default Row;
