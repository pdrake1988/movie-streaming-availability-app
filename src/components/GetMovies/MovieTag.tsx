import React from "react";
import {Link} from "react-router-dom";


function MovieTag(props: any) {
    return (
        <div className={'col-3'}>
            <Link to={`/MoviePage/${props.movieId}`}><img className={'d-none d-xxl-block img-fluid'} src={'https://image.tmdb.org/t/p/w500' + props.poster} alt={props.title}/></Link>
            <Link to={`/MoviePage/${props.movieId}`}><img className={'d-none d-xl-block d-xxl-none img-fluid'} src={'https://image.tmdb.org/t/p/342' + props.poster} alt={props.title}/></Link>
            <Link to={`/MoviePage/${props.movieId}`}><img className={'d-none d-lg-block d-xl-none img-fluid'} src={'https://image.tmdb.org/t/p/w185' + props.poster} alt={props.title}/></Link>
            <Link to={`/MoviePage/${props.movieId}`}><img className={'d-md-block d-lg-none img-fluid'} src={'https://image.tmdb.org/t/p/w154' + props.poster} alt={props.title}/></Link>
            <Link to={`/MoviePage/${props.movieId}`}><img className={'d-none d-sm-block d-md-none img-fluid'} src={'https://image.org/t/p/w92' + props.poster} alt={props.title}/></Link>
            <label>{props.title}</label>
        </div>
    )
}
export default MovieTag;
