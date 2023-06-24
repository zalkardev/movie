import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../MovieCard";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const getPopular = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res)=> setPopular(res.data.results))
    }
    useEffect(()=>{
        getPopular(API_KEY)
    },[])
    console.log(popular)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        popular.map(el => <MovieCard key={el.id} el={el}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;