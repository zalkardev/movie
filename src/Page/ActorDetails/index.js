import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";

const ActorDetails = (key) => {
    const {actorId} = useParams()
    const [actorDetails,setActorDetails] = useState({})
    const getActorDetails = ()=>{
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`)
            .then(res => setActorDetails(res.data))
    }
useEffect(()=>{
    getActorDetails(API_KEY)
},[])
    console.log(actorDetails)
    const {profile_path,name,biography,also_know_as} = actorDetails
    return (
        <div id="actors">
            <div className="container">
                <div className="actors">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actors--title">
                        <h1>{name}</h1>
                        <h3>Автобиография</h3>
                        <p>{biography}</p>
                        <div className="actors--title__bio">
                            <h2>Так же известно как</h2>
                            <div>{also_know_as.map((el)=> <p key={el}>{el}</p>)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorDetails;