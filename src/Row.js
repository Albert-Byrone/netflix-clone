import React, { useEffect, useState } from 'react'
import axios from "./axios"
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";
function Row( { title, fetchUrl, isLargeRow }) {
    const [ movies, setMovies ] = useState([]);
    const [ trailerUrl, setTrailerUrl] = useState("");

    useEffect(() =>{
        // if [] run once but if there is a dependancy ,,refresh when there is a change in the dependancy
        async  function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl]);


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleClick = (movie)=>{
        console.log(movie);
        if (trailerUrl){
            setTrailerUrl("");
        }else {
            console.log(movie.original_name);
            movieTrailer( movie?.title || movie?.name || movie?.original_name || "")
                .then(url =>{
                    console.log(url);
                    const urlParams = new URLSearchParams( new URL(url).search);
                    // console.log(urlParams)
                    console.log(urlParams.get("v"));
                    setTrailerUrl(urlParams.get("v"));
                }).catch(error=>{
                    console.log(error);
                })
        }
    };

    return (
        <div className="row"> 
            <p>{ title }</p>
           <div className="row__posters">
                {movies.map((movie) => (
                    // key is used to uniquesly identify the element and is used for optimizatio/n
                    <img 
                    key={ movie.id }
                    onClick={() => handleClick(movie) }
                    className={`row__poster ${ isLargeRow && "row__posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={ movie.name} />
                    ))}
           </div>
           { trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

        </div>  
    )
}

export default Row
