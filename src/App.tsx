import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import GetMovies from "./components/GetMovies/GetMovies";
import MoviePage from "./components/MoviePage/MoviePage";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
export default function App() {
    let query = useQuery()
    return (
        <BrowserRouter basename={'/MovieStreamingAvailabilityApp'}>
            <Switch>
                <Route path={'/GetMovies'}>
                    <GetMovies/>
                </Route>
                <Route path={'/MoviePage?movieId'}>
                    <MoviePage movie={query.get("movieId")}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
