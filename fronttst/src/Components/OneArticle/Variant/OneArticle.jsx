import Paper from "@material-ui/core/Paper"
import React, {useEffect, useState} from 'react'
import MarkdownView from "react-showdown";
import {instance} from "../../Register/RegisterPage";
import {useParams, withRouter} from "react-router";
import Comments from "../../Comment/Comments";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ParserDate from "../../../LogicComponents/ParserDate";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography"

const OneArticle=({history})=>{
    //todo key to myArticles
    //todo key Editing thisAlrticle
    let cookie= document.cookie===''?'{"authorized":false}':JSON.parse(document.cookie)
    let {id} =useParams()
    const [state, setState]=useState({})
    const [user,setUser]=useState({})
    // console.log(state)
    // console.log(user)
    let getArticle=()=>{
        //обрати внимание это по id СТАТЬИ
        instance.get(`/article/${id}`).then((res)=>{
            // console.log(res.data[0])
            setState(res.data[0])
            instance.get(`/user/${res.data[0].userid}`).then(res=>
            setUser(res.data[0]))
        })
    }
    //обработчик событий нажатия кнопки
    let clickListener=()=>{
        if (!cookie.authorized){ history.push(`/user_page/${cookie.userId}`)}
        history.push('/')
    }
    useEffect(getArticle,[id])
    return (<div>
        {user&&
        <Box m={2}>
            <Button variant={"contained"}
                    color={"primary"}
                onClick={clickListener}
            >Перейти к моим статьям</Button>
        </Box>
        }
        <Paper elevation={5}>
        {/*    todo Card*/}
        <div style={{padding:"10px"}}>
            <Avatar src={user.avatar} /><Typography color={"primary"}>{user.name}</Typography>
            <span><Typography>{ParserDate(state.date)}</Typography></span>
            <MarkdownView id={'output'}
                          markdown={state.body}
                          options={{emoji: true}}/>
            <Comments articleID={id}/>
        </div>
        </Paper>
    </div>)
}
export default withRouter(OneArticle)