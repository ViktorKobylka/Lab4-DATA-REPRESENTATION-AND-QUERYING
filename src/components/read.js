import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);
  const data = [];
  //give comment
  useEffect(() => {
    //give comment and explain everything below
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h2>This is my Read Component.</h2>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;