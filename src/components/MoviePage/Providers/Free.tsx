import Providers from "../movie_page_interfaces/Providers";
import React from "react";

interface FreeProps {
    Provider: Providers[] | undefined;
}
export default function Free(props: FreeProps) {
    return (
        <div className={'mx-auto'}>
            <h1 className={'text-center d-none d-lg-block'}>Free</h1>
            <h3 className={'text-center d-none d-md-block d-lg-none'}>Free</h3>
            <h6 className={'text-center d-sm-block d-md-none'}>Free</h6>
            {props.Provider !== undefined && props.Provider.map((company: Providers, index: number) => {
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
