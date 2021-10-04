import React from "react";
import {Button, Dropdown, DropdownButton} from "react-bootstrap";
import logo from '../files/img.png';
import DropdownItem from "react-bootstrap/DropdownItem";

function PageSort(props: any) {
    return (
        <React.Fragment>
            <div className={'col-2'}>
                <Button variant={'primary'} onClick={() => props.pagination(props.page - 1)}>Previous</Button>
            </div>
            <div className={'col-2'}>
                <DropdownButton title={'Page Sort'} variant={'success'} drop={'up'}>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 2)}>Page -2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 3)}>Page -3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 4)}>Page -4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 5)}>Page -5</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 6)}>Page -6</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 7)}>Page -7</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 8)}>Page -8</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 9)}>Page -9</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page - 10)}>Page -10</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className={'col-3'}>
                <h3>{props.page}</h3>
            </div>
            <div className={'col-2'}>
                <DropdownButton title={'Backwards'} variant={'success'} drop={'up'}>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 2)}>Page +2</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 3)}>Page +3</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 4)}>Page +4</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 5)}>Page +5</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 6)}>Page +6</Dropdown.Item>
                    <Dropdown.Item onClick={()=> props.pagination(props.page + 7)}>Page +7</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 8)}>Page +8</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 9)}>Page +9</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.pagination(props.page + 10)}>Page +10</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className={'col-2'}>
                <Button variant={'primary'} onClick={() => props.pagination(props.page + 1)}>Next</Button>
            </div>
            <div className={'col-12'}>
                <img className={'img-fluid'} src={logo} alt={'The Movie Db logo'}/>
            </div>
        </React.Fragment>
    )
}
export default PageSort;
