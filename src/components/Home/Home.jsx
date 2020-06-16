import React from "react";
import List from "./List/List";
const Home = (props) => {
    return (
        <div>
            <List listPage={props.listPage}/>
        </div>
    );
}

export default Home;