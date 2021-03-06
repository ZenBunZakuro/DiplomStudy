import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateNewPostChange} from "./stateManagment/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPosts={updateNewPostChange}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
    serviceWorker.unregister();
}

