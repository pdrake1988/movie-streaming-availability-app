import React from "react";

interface BackdropProps {
    BackDropPath: string | undefined;
}
export default function Backdrop(props: BackdropProps) {
    return (
        <div>
            <img className={'img-fluid mx-auto'} src={'https://image.tmdb.org/t/p/w780' +
                props.BackDropPath} alt={'Movie Backdrop'}/>
        </div>
    )
}
