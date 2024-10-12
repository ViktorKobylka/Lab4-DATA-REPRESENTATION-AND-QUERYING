//import movieItem component
import MovieItem from "./movieitem";
const Movies = (props)=>{
    //map over myMovies array and return MovieItem for each movie
   return props.myMovies.map(
    (movie)=>{
        //return heading
        return <MovieItem mymovie={movie} key={movie.imdbID}/>
    }
   );

}

export default Movies;