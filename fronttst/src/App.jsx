import React from 'react'
import './AppBTSRP.css';
import {Route, withRouter} from "react-router";
import RegisterPage from "./Components/Register/RegisterPage";
import LoginPage from "./Components/Login/LoginPage";
import Header from "./Components/Header/Header";
import UserArticles from "./Components/User/UsersArticles";
import ArticleBuilderPage from "./Components/BuilderPage/ArticleBuilderPage";
import OneArticle from "./Components/OneArticle/OneArtcle";
import Home from "./Components/Home/Home";
import Upload from "./Components/Upload";
import Profile from "./Components/ProfilePage/Profile";
import "./App.css"

function App() {
    return (
        <div className='container'>
            <Header />
            <div className="plug">PLUG</div>
                <Route path="/user_page/:id" component={UserArticles}/>
                <Route path="/one_article/:id" component={OneArticle}/>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/builder/:userId" component={ArticleBuilderPage}/>
                <Route path='/upload' component={Upload}/>
                <Route path='/profile' component={Profile}/>
        </div>
    )
}

export default withRouter(App);
