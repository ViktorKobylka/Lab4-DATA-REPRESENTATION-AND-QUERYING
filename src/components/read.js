import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

function Read() {
  const [movies, setMovies] = useState([]);
  const data = [];
  //run enclosed code 
  useEffect(() => {
    //make a get request to fetch data from API
    axios.get('https://jsonblob.com/api/jsonblob/1287718524221775872')
      .then((response) => {
        //show response data in console
        console.log(response.data);
        //update movie data received from API
        setMovies(response.data.movies);

      })
      .catch((error) => {
        //show error if request fails
        console.log(error);
      });
  });

  return (
    <div>
      <h2>This is my Read Component.</h2>
      {/*send movies state as a prop to the Movies component*/}
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;