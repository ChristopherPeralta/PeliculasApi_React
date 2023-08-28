import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { get } from "../data/dataApi"
import { getMovieImg } from "../utils/getMovieImg"

import "../pages/MovieDetails.css"

export function MovieDetails(){
    const { movieId } =useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);
    
    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setGeneros(data.genres[0]);
        });
    }, [movieId]);
    const imageUrl = getMovieImg(movie.poster_path,500)

    return (
        <div className="detailsContainer">
            <img src={imageUrl} alt={movie.title} className="col movieImage"/>
            <div className="col movieDetails">
                <p className="title">
                    <strong>Tittle: </strong>
                    {movie.title} 
                </p>
                <p>
                    <strong>Genres: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
            </div>

        </div>
        
        
        );
}

