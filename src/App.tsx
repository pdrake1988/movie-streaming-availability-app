import {BrowserRouter, Route, Switch} from "react-router-dom";
import React, { Suspense } from "react";
const GetMovies  = React.lazy(() => import("./components/GetMovies/GetMovies"));
const MoviePage = React.lazy(() => import("./components/MoviePage/MoviePage"));
export default function App() {
    document.getElementsByName('body').values()
    return (
        <BrowserRouter>
            <Suspense fallback={<div><h1 className={'align-content-center'}>...loading</h1></div>}>
                <Switch>
                    <Route path={'/MoviePage/:movieId'} component={MoviePage}/>
                    <Route path={['/:genre/:monetization/:sort/:page', '/']}>
                        <GetMovies/>
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}
