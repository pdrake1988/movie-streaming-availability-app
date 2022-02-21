import React from "react";
import logo from '../files/img.png';
import ReactPaginate from 'react-paginate'

interface PageParams{
    pageNum: number;
    total_pages: number;
    pagination(pageNum: number): void;
}

function PageSort(props: PageParams) {
    return (
        <React.Fragment>
            <div className={'col-12 d-none d-lg-block'}>
                <ReactPaginate initialPage={props.pageNum - 1} pageCount={props.total_pages} pageRangeDisplayed={19} marginPagesDisplayed={2} onPageChange={({selected}) => props.pagination(selected + 1)}
                               containerClassName='pagination justify-content-center' pageClassName='page-item' pageLinkClassName='page-link' previousClassName={'page-item'} previousLinkClassName={'page-link'}
                               nextClassName={'page-item'} nextLinkClassName={'page-link'} activeClassName={'active'}
                />
            </div>
            <div className={'col-12 d-none d-md-block d-lg-none'}>
                <ReactPaginate initialPage={props.pageNum - 1} pageCount={props.total_pages} pageRangeDisplayed={9} marginPagesDisplayed={2} onPageChange={({selected}) => props.pagination(selected + 1)}
                    containerClassName='pagination justify-content-center' pageClassName='page-item' pageLinkClassName='page-link' previousClassName={'page-item'} previousLinkClassName={'page-link'}
                    nextClassName={'page-item'} nextLinkClassName={'page-link'} activeClassName={'active'}
                />
            </div>
            <div className={'col-12 d-none d-sm-block d-md-none'}>
                <ReactPaginate initialPage={props.pageNum - 1} pageCount={props.total_pages} pageRangeDisplayed={4} marginPagesDisplayed={2} onPageChange={({selected}) => props.pagination(selected + 1)}
                               containerClassName='pagination justify-content-center' pageClassName='page-item' pageLinkClassName='page-link' previousClassName={'page-item'} previousLinkClassName={'page-link'}
                               nextClassName={'page-item'} nextLinkClassName={'page-link'} activeClassName={'active'}
                />
            </div>
            <div className={'col-12 d-xs-block d-sm-none'}>
            <ReactPaginate initialPage={props.pageNum - 1} pageCount={props.total_pages} pageRangeDisplayed={2} marginPagesDisplayed={2} onPageChange={({selected}) => props.pagination(selected + 1)}
                           containerClassName='pagination justify-content-center' pageClassName='page-item' pageLinkClassName='page-link' previousClassName={'page-item'} previousLinkClassName={'page-link'}
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
