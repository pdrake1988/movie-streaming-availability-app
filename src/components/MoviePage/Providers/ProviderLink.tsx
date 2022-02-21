import React from "react";

interface LinkProps {
    Provider: string | undefined;
}
export default function ProviderLink(props: LinkProps) {
    return (
        <div className={'mx-auto'}>
            <a className={'text-primary align-content-center'} href={props.Provider}>The Moviedb movie page</a>
        </div>
    )
}
