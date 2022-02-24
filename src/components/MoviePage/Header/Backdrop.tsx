import React from "react";

interface BackdropProps {
    BackDropPath: string | undefined;
}
export default function Backdrop(props: BackdropProps) {
    return (
        <div className={'col-4'}>
            <img className={'img-fluid'} src={'https://image.tmdb.org/t/p/w780' +
                props.BackDropPath} alt={'Movie Backdrop'}/>
        </div>
    )
}
