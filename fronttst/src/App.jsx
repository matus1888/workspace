import React, {useEffect, useState} from 'react'
import {Route, withRouter} from "react-router";
import RegisterPage from "./Components/Register/RegisterPage";
import LoginPage from "./Components/Login/LoginPage";
import Header from "./Components/Header/Variant/Header";
import UserArticles from "./Components/User/UsersArticles";
import ArticleBuilderPage from "./Components/BuilderPage/ArticleBuilderPage";
import OneArticle from "./Components/OneArticle/OneArtcle";
import Home from "./Components/Home/Variant/Home";
import Upload from "./Components/Upload";
import Profile from "./Components/ProfilePage/Profile";

export const Context=React.createContext(false)

function App() {

    const [small,setSmall]=useState(window.screen.availWidth < 992 ? true : false)
    const listenerSize = () => setSmall(window.screen.availWidth < 992 ? true : false)
    useEffect(()=>{
        window.addEventListener("resize", listenerSize)
        return () => {
            window.removeEventListener("resize", listenerSize)
    }})
    return (
        <Context.Provider value={small}>
            <div><Header />
                <Route path="/user_page/:id" component={UserArticles}/>
                <Route path="/one_article/:id" component={OneArticle}/>
                <Route exact path="/" component={Home}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/builder/:userId" component={ArticleBuilderPage}/>
                <Route path='/upload' component={Upload}/>
                <Route path='/profile' component={Profile}/>
            </div>
        </Context.Provider>
    )
}

export default withRouter(App);
