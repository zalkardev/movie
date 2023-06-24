import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";

const Trailer = (id) => {
    const [trailer,setTrailer] = useState([])

    const getTrailer = (key)=>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res=> setTrailer(res.data.results))
    }
    useEffect(()=> {
        getTrailer(API_KEY)
    },[])
    console.log("trailer",trailer)
    return (
        <div id="trailer">
            <div className="container">
                <div className="trailer">
                    {
                        trailer.slice(0,10).map(el=>(
                            <iframe width="300" height="230" src={`https://www.youtube.com/embed/${el.key}`}
                                    title="Alec Benjamin - Let Me Down Slowly | lyrics video | [1080p/60fps]"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Trailer;