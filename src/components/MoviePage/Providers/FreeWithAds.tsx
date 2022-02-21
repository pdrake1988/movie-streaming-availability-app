import React from "react";
import Providers from "../movie_page_interfaces/Providers";

interface FreeWithAdsProps {
    Provider: Providers[] | undefined;
}
export default function FreeWithAds(props: FreeWithAdsProps) {
    return (
        <div className={'mx-auto'}>
            <h1 className={'text-center d-none d-lg-block'}>Free with Ads</h1>
            <h3 className={'text-center d-none d-md-block d-lg-none'}>Free with Ads</h3>
            <h6 className={'text-center d-sm-block d-md-none'}>Free with Ads</h6>
            {props.Provider !== undefined && props.Provider.map((company: Providers, index: number) => {
                return(
                    <React.Fragment key={index}>
                        <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                        <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                        <h1 className={'text-center d-none d-lg-block'}>{company.provider_name}</h1>
                        <h3 className={'text-center d-none d-md-block d-lg-none'}>{company.provider_name}</h3>
                        <h6 className={'text-center d-none d-sm-block'}>{company.provider_name}</h6>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
