import React from "react";
import CardList from "./Card/CardList";
import {CardColumns} from "react-bootstrap";
import list from './List.module.css';

const List = (props) => {

    let listDataElements = props.listPage.listData.map((data) => <CardList image={data.image} navigation={data.navigation}
                                                            description={data.description} price={data.price}/>);
    return (
        <div>
            <h1>Объявления</h1>
            <div className={`${list.list} ${'container'}`}>
                <CardColumns>
                    {listDataElements}
                </CardColumns>
            </div>
        </div>
    );
}

export default List;