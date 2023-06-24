import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import ActorDetails from "../../Page/ActorDetails";



const Actors = ({id}) => {
    const [actors,setActors] = useState([])
    const getActors = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
            .then(res => setActors(res.data.cast))
    }
    useEffect(()=>{
        getActors(API_KEY)
    },[])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 4,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div id="actors">
            <div className="container">
                <Slider className="actors" {...settings}>
                    {
                        actors.map(el=>(
                            <div className="actors--title">
                               <Link to={`/movie/details/actors/${el.id}`}> {
                                   el.profile_path ?<img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                       : <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="img"/>
                               }</Link>
                                <h5>{el.name}</h5>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;