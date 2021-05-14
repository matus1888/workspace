import React, {useEffect, useState} from 'react'
import MarkdownView from "react-showdown";
import {instance} from "./RegisterPage";
import {useParams} from "react-router";

const OneArticle=()=>{
    let {id} =useParams()
    const [state, setState]=useState({})
    let getArticle=()=>{
        //обрати внимание это по id СТАТЬИ
        instance.get(`/article/${id}`).then((res)=>{
            console.log(res.data[0])
            setState(res.data[0])
            
        })
    }
    useEffect(getArticle,[])
    return (<div>
        <MarkdownView id={'output'}
                      markdown={state.body}
                      options={{emoji: true}}/>
    </div>)
}
export default OneArticle