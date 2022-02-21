import ProductionCompanies from "../movie_page_interfaces/ProductionCompanies";
import React from "react";
interface CompaniesProps {
    companies: ProductionCompanies[] | undefined;
}
export default function Companies(props: CompaniesProps) {
    return (
        <div className={'mx-auto'}>
            <h4 className={'text-center'}>Production Companies</h4>
            {props.companies?.map((company: ProductionCompanies, index) => {
                return(
                    <div key={index}>
                        <img className={'img-fluid d-none d-md-block mx-auto'} src={'https://image.tmdb.org/t/p/w92' + company.logo_path} alt={'Company Logo'}/>
                        <img className={'img-fluid d-sm-block d-md-none mx-auto'} src={'https://image.tmdb.org/t/p/w45' + company.logo_path} alt={'Company Logo'}/>
                        <p className={'text-center'}>{company.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
