import { Pagination } from "react-bootstrap";

function PageSort(props: any) {
    let items = new Array(20);
    let pageCount = 20;
    for (let number = 1; number < pageCount; number++) {
        items.push(
            <Pagination.Item active={props.page === number} key={number} onClick={() => props.pagination(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className={'col-12'}>
            <Pagination className={'align-content-center'}>{items}</Pagination>
        </div>
    )
}
export default PageSort;
