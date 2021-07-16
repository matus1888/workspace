import React, {useEffect, useState} from 'react'
import MarkdownView from "react-showdown";
import {instance} from "./RegisterPage";
import {useParams, withRouter} from "react-router";
import {Link} from "react-router-dom";
import Home from "./homepageVariant/Home";

const OneArticle=()=>{
    //todo key to myArticles
    //todo key Editing thisAlrticle
    let cookie=''
    document.cookie===''?cookie='{"authorized":false}':cookie=JSON.parse(document.cookie)
    let {id} =useParams()
    const [state, setState]=useState({})
    let getArticle=()=>{
        //обрати внимание это по id СТАТЬИ
        instance.get(`/article/${id}`).then((res)=>{
            // console.log(res.data[0])
            setState(res.data[0])
            
        })
    }
    //обработчик событий нажатия кнопки
    let Disabler=()=>{
        if (!cookie.authorized){
            console.log('not authorize')
            return false
        }
        console.log('cookie.userId='+cookie.userId)
        return cookie.userId===state.userid?true:true
    }
    useEffect(getArticle,[id])
    return (<div>
        {state&&state.userid&&<Link to={Disabler()?`/user_page/${cookie.userId}`:'/'} className={'btn btn-primary'}
        >to my articles</Link>}
        <MarkdownView id={'output'}
                      markdown={state.body}
                      options={{emoji: true}}/>
                      <Home/>
    </div>)
}
export default withRouter(OneArticle)