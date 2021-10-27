import {BrowserRouter, Route, Switch} from "react-router-dom";
import GetMovies from "./components/GetMovies/GetMovies";
import MoviePage from "./components/MoviePage/MoviePage";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/MoviePage/:movieId'} component={MoviePage}/>
                <Route path={['/:genre/:monetization/:sort/:page', '/']}>
                    <GetMovies/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
