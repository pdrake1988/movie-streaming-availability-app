import {Dropdown} from "react-bootstrap";
interface GenreButtonProps {
    key: number;
    id: number | null;
    genre: string;
    filterByGenre(id: string | null): void;
}
export default function GenreButton(props: GenreButtonProps) {
    return (
        <Dropdown.Item as={'button'} onClick={() => {
            if (props.id !== null) {
                props.filterByGenre(props.id.toString());
            }
        }}>{props.genre}</Dropdown.Item>
    )
}
