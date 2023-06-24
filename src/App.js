import './App.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./Page/MovieDetails";
import ActorDetails from "./Page/ActorDetails";

function App() {
  return (
    <div className="">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/topRated'} element={<TopRated/>}/>
            <Route path={'/movie/details/:movieId'} element={<MovieDetails/>}/>
            <Route path={'/movie/details/actor/:actorId'} element={<ActorDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
