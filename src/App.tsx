import {BrowserRouter, Route, Switch} from "react-router-dom";
import GetMovies from "./components/GetMovies/GetMovies";
import MoviePage from "./components/MoviePage/MoviePage";

export default function App() {
    return (
        <BrowserRouter basename={'/MovieStreamingAvailabilityApp'}>
            <Switch>
                <Route path={'/MoviePage/:movieId'} component={MoviePage}/>
                <Route path={'/'}>
                    <GetMovies/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
