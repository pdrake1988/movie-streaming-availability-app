interface GenreTitleProps {
    id: number | null;
}
export default function GenreTitle(props: GenreTitleProps) {
    switch (props.id) {
        case 28:
            return (
                <h3>Action</h3>
            );
        case 12:
            return (
                <h3>Adventure</h3>
            );
        case 16:
            return (
                <h3>Animation</h3>
            );
        case 35:
            return (
                <h3>Comedy</h3>
            );
        case 80:
            return (
                <h3>Crime</h3>
            );
        case 99:
            return (
                <h3>Documentary</h3>
            );
        case 18:
            return (
                <h3>Drama</h3>
            );
        case 10751:
            return (
                <h3>Family</h3>
            );
        case 14:
            return (
                <h3>Fantasy</h3>
            );
        case 36:
            return (
                <h3>History</h3>
            );
        case 27:
            return (
                <h3>Horror</h3>
            );
        case 10402:
            return (
                <h3>Music</h3>
            );
        case 9648:
            return (
                <h3>Mystery</h3>
            );
        case 10749:
            return (
                <h3>Romance</h3>
            );
        case 878:
            return (
                <h3>Science Fiction</h3>
            );
        case 10770:
            return (
                <h3>TV Movie</h3>
            );
        case 53:
            return (
                <h3>Thriller</h3>
            );
        case 10752:
            return (
                <h3>War</h3>
            );
        case 37:
            return (
                <h3>Western</h3>
            );
        default:
            return (
                <h3>Default</h3>
            )
    }
}
