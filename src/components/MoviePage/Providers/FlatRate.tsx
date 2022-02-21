import Providers from "../movie_page_interfaces/Providers";
import React from "react";

interface FlatRateProps {
    Providers: Providers[] | undefined;
}
export default function FlatRate(props: FlatRateProps) {
    return (
        <div className={'mx-auto'}>
            <h1 className={'text-center d-none d-lg-block'}>Flatrate</h1>
            <h3 className={'text-center d-none d-md-block d-lg-none'}>Flatrate</h3>
            <h6 className={'text-center d-sm-block d-md-none'}>Flatrate</h6>
            {props.Providers !== undefined && props.Providers.map((company: Providers, index: number) => {
                return(
                    <React.Fragment key={index}>
                        <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                        <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                        <h1 className={'text-center d-none d-lg-block'}>{company.provider_name}</h1>
                        <h3 className={'text-center d-none d-md-block d-lg-none'}>{company.provider_name}</h3>
                        <h6 className={'text-center d-sm-block d-md-none'}>{company.provider_name}</h6>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
