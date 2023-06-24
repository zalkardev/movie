import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div id="movieCard">
             <div className="movieCard">
                 <Link to={`/movie/details/${el.id}`}>
                     <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                 </Link>
                 <h3>{el.title}</h3>
                 <h4>{el.release_date}</h4>
             </div>
        </div>
    );
};

export default MovieCard;