import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../MovieCard";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const getTopRated = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
            .then((res)=> setTopRated(res.data.results))
    }
    useEffect(()=>{
        getTopRated(API_KEY)
    },[])
    console.log(topRated)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopRated;