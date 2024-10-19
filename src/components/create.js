import { useState } from "react";
//create functional component
const Create = () => {
  //declare variables
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  //functional to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //create movie object
    const movie = {title, year, poster};
    //show movie in console
    console.log(movie);
    
}

 //return heading
  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/*form for adding movie*/}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/*input field for movie title*/}
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="form-group">
           {/*input field for movie year*/}
          <label>Add Movie Year </label>
            <input type="text"
              className="form-control"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </div>
        <div className="form-group">
           {/*input field for movie poster*/}
          <label>Add Movie Poster: </label>
            <input type="text"
              className="form-control"
              value={poster}
              onChange={(e) => { setPoster(e.target.value) }}
            />
        </div>
        {/*submit button*/}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

  //export the Create component
  export default Create;