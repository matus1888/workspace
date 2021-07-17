import React, {useEffect, useState} from 'react'
import MarkdownView from "react-showdown";
import {instance} from "../Register/RegisterPage";
import {useParams, withRouter} from "react-router";
import {Link} from "react-router-dom";
import Home from "../Home/Home";
import Comments from "../Comment/Comments";

const OneArticle=()=>{
    //todo key to myArticles
    //todo key Editing thisAlrticle
    let cookie=''
    document.cookie===''?cookie='{"authorized":false}':cookie=JSON.parse(document.cookie)
    let {id} =useParams()
    const [state, setState]=useState({})
    // console.log(state)
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
            return false
        }
        return cookie.userId===state.userid?true:true
    }
    useEffect(getArticle,[id])
    return (<div>
        {state&&state.userid&&<Link to={Disabler()?`/user_page/${cookie.userId}`:'/'} className={'btn btn-primary'}
        >Перейти к моим статьям</Link>}
        <MarkdownView id={'output'}
                      markdown={state.body}
                      options={{emoji: true}}/>
                      <Comments articleID={id}/>
                      <Home/>
    </div>)
}
export default withRouter(OneArticle)