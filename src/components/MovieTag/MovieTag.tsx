import React from "react";

function MovieTag(props: any) {

    return (
        <div className={'col-3'}>
            <img className={'d-none d-xxl-block img-fluid'} src={'https://image.tmdb.org/t/p/w342' + props.poster} alt={props.title}/>
            <img className={'d-none d-lg-block d-xl-none img-fluid'} src={'https://image.tmdb.org/t/p/w185' + props.poster} alt={props.title}/>
            <img className={'d-none d-md-block d-lg-none img-fluid'} src={'https://image.tmdb.org/t/p/w154' + props.poster} alt={props.title}/>
            <img className={'d-none d-sm-block d-md-none img-fluid'} src={'https://image.tmdb.org/t/p/w92' + props.poster} alt={props.title}/>
            <label>{props.title}</label>
        </div>
    )
}
export default MovieTag
