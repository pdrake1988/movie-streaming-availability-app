import React from "react";
import {Pagination} from "react-bootstrap";
import logo from '../files/img.png';
import ReactPaginate from 'react-paginate'
interface PageSort {
    pageNum: number;
    total_pages: number;
    pagination(pageNum: number): void;
}

function PageSort(props: PageSort) {
    return (
        <React.Fragment>
            <div className={'col-12'}>
                <ReactPaginate initialPage={props.pageNum} pageCount={props.total_pages} pageRangeDisplayed={10} marginPagesDisplayed={2} onPageChange={({selected}) => props.pagination(selected + 1)}
                    containerClassName='pagination' pageClassName='page-item' pageLinkClassName='page-link' previousClassName={'page-item'} previousLinkClassName={'page-link'}
                    nextClassName={'page-item'} nextLinkClassName={'page-link'} activeClassName={'active'}
                />
            </div>
            <div className={'col-12'}>
                <img className={'img-fluid'} src={logo} alt={"The MovieDb Logo"}/>
            </div>
        </React.Fragment>
    )
}
export default PageSort;
