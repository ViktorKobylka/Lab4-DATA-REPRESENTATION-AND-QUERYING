import Card from "react-bootstrap/Card";
import { useEffect } from "react";

//define functional component
const MovieItem = (props)=>{
    //show mymovie details
    useEffect(()=>{
        console.log("Movie Item: ", props.mymovie);
    }, [props.mymovie]);

    //display mymovie data using Card
    return(
        <div>
            <Card>
            <Card.Header>{props.mymovie.Title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <img src={props.mymovie.Poster} alt={props.mymovie.Title}></img>
                    <footer>{props.mymovie.Year}</footer>
                </blockquote >
            </Card.Body>
           
        </Card>
        </div>     
    );

}

export default MovieItem;