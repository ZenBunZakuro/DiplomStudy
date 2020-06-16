import React from 'react';
import './App.css';
import Navbr from "./components/Navbar/Navbr";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import AddPost from "./components/AddPost/AddPost";
import Home from "./components/Home/Home";

function App(props) {
    return (
        <Router>
            <div>
                <Navbr/>
                <div className="app-wrapper-content">
                    <Route path='/home' render={() => <Home listPage={props.state.listPage}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route path='/add' render={() => <AddPost addPost={props.addPost} newPostDescription={props.state.listPage.newPostDescription} newPostPrice={props.state.listPage.newPostPrice} newPostLocation={props.state.listPage.newPostLocation} updatePostChange={props.updateNewPosts} />}/>
                </div>
            </div>
        </Router>

    );
}


export default App;
