import React from 'react'
import './AppBTSRP.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import HomePage from "./Components/HomePage";
import Header from "./Components/Header";
import UserArticles from "./User/UsersArticles";
import ArticleBuilderPage from "./Components/ArticleBuilderPage";

function App() {
    return (<Router>
        <div className={'container'}>
            <Header/>
                     <Switch>
                <Route  path="/user_page/:id" >
                    <UserArticles />
                    <hr/>
                </Route>
                <Route exact path="/">
                    <HomePage/>
                    <hr/>
                </Route>
                <Route path="/register">
                    <RegisterPage/>
                    <hr/>
                </Route>
                <Route path="/login">
                    <LoginPage/>
                    <hr/>
                </Route>
                <Route path="/builder">
                    <ArticleBuilderPage/>
                    <hr/>
                </Route>
            </Switch>
        </div>
    </Router>)
}

export default App;
