const MovieItem = (props)=>{
    return(
        <div>
           <h3>hello from movie Item</h3> 
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>
        </div>
    );

}

export default MovieItem;