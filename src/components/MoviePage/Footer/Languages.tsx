import React from "react";
import SpokenLanguages from "../movie_page_interfaces/SpokenLanguages";
interface SpokenLanguagesProps {
    languages: SpokenLanguages[] | undefined;
}
export default function Languages(props: SpokenLanguagesProps) {
    return (
        <div className={'mx-auto'}>
            <h4 className={'text-center'}>Spoken Languages</h4>
            {props.languages?.map((language: SpokenLanguages, index: number) => {
                return(
                    <p className={'text-center'} key={index}>{language.english_name}</p>
                )
            })}
        </div>
    )
}
