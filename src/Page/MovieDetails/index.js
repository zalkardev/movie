import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import {AiFillStar, AiOutlineMenuUnfold, AiTwotoneHeart} from "react-icons/ai";
import {BsBookmarkFill, BsFillPlayFill} from "react-icons/bs";
import Actors from "../../components/Actors";
import Trailer from "../../components/Trailer";
import ActorDetails from "../ActorDetails";

const MovieDetails = () => {
    const {movieId} = useParams()
    console.log(movieId)
    const [details,setDetails] = useState({})
    const getDetails = (key)=>{
         axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`)
             .then(res => setDetails(res.data))
    }
    const [progressValue,setProgressValue]= useState(0)
    const {title ,poster_path,release_date,runtime,overview,backdrop_path,genres,tagline,vote_average} = details
    // const progressEndValue = Math.round(vote_average*10)
    // useEffect(()=>{
    //     const progressStartValue = 0
    //     let progress = setInterval(()=>{
    //         progressStartValue++;
    //         setProgressValue(progress)
    //         if (progressStartValue=== progressEndValue){
    //             clearInterval(progress)
    //         }
    //     },20)
    //     return (()=>{
    //         clearInterval(progress)
    //     })
    // },[progressValue])
    const [click,setClick]= useState(false)
    useEffect(()=>{
        getDetails(API_KEY)
    },[])
    console.log(details)
    return (
        <><div style={{
            backgroundImage: "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
            background: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${backdrop_path})no-repeat center/cover`,
        }} id="details"><div className="container">
            <div className="details">
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="img"/>
                <div className="detail">
                    <h1>{title}</h1>
                    <div className="details--nav">
                        <h6>{release_date}</h6>
                        <div>{genres?.map(el=><h1>{el.name}</h1>)}</div>
                        <h2>{Math.floor(runtime/60)}h {Math.floor(runtime%60)}m</h2>
                    </div>
                    <div className="details--circle__title">
                        <div className="details--circle">
                            <h3>{Math.round(vote_average*10)} <sub>%</sub> </h3>
                        </div>
                        <h4>Рейтинг</h4>
                        <div className="icon1"><AiOutlineMenuUnfold/></div>
                        <div className="icon2" onClick={()=>
                            setClick(!click)} style={{
                            color: click ? "red" : ""
                        }}><AiTwotoneHeart/></div>
                        <div className="icon3"><BsBookmarkFill/></div>
                        <div className="icon4"><AiFillStar/></div>
                        <p><BsFillPlayFill/> Воспроизвести трейлер</p>
                    </div>
                    <div>
                        <i> <h4>{tagline}</h4></i>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
            <Actors id={movieId}/>
            <Trailer id={movieId}/>
        </>
    );
};

export default MovieDetails;