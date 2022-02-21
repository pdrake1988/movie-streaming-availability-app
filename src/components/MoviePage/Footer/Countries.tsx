import React from "react";
import ProductionCountries from "../movie_page_interfaces/ProductionCountries";
interface CountriesProps {
    countries: ProductionCountries[] | undefined;
}
export default function Countries(props: CountriesProps) {
    return (
        <div className={'mx-auto'}>
            <h4 className={'text-center'}>Production Countries</h4>
            {props.countries?.map((country: ProductionCountries, index: number) => {
                return (
                    <p className={'text-center'} key={index}>{country.name}</p>
                )
            })}
        </div>
    )
}
