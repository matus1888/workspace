import React from 'react'
import './AppBTSRP.css';
import {Route, withRouter} from "react-router";
import RegisterPage from "./Components/RegisterPage";
import LoginPage from "./Components/LoginPage";
import Header from "./Components/Header";
import UserArticles from "./User/UsersArticles";
import ArticleBuilderPage from "./Components/ArticleBuilderPage";
import OneArticle from "./Components/OneArtcle";
import Home from "./Components/homepageVariant/Home";
import Upload from "./Components/Upload";

function App() {
    return (
        <div className={'container'}>
            <Header/>
                <Route path="/user_page/:id" component={UserArticles}/>
                <Route path="/one_article/:id" component={OneArticle}/>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/builder/:userId" component={ArticleBuilderPage}/>
                <Route path='/upload' component={Upload}/>
        </div>
    )
}

export default withRouter(App);
