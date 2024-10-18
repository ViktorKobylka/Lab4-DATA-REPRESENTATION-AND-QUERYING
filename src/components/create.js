import { useState } from "react";
//create functional component
const Create = () => {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = {title, year, poster};
    console.log(movie);
    
}

 //return heading
  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year </label>
            <input type="text"
              className="form-control"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </div>
        <div className="form-group">
          <label>Add Movie Poster: </label>
            <input type="text"
              className="form-control"
              value={poster}
              onChange={(e) => { setPoster(e.target.value) }}
            />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

  //export the Create component
  export default Create;