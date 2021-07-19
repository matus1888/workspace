import React, {useEffect, useState} from 'react'
import {withRouter} from "react-router";
import {instance} from '../Register/RegisterPage'
import './Likes.css'

const Likes = (props) => {
    const [likes, setLikes] = useState(null)
    const [dislikes, setDislikes] = useState(null)
    const [update,setUpdate]=useState(false)
    const [already,setAlready]=useState(false)
    const [alreadyDis,setAlreadyDis]=useState(false)
    let cookie = ''
    document.cookie === '' ? cookie = '{"authorized":false}' : cookie = JSON.parse(document.cookie)
    // console.log(cookie)
    // console.log('props in Likes',props)

    useEffect(() => {
        instance.get(`/likes/${props.articleID}`).then(res => {
                setLikes(res.data)
            }
        ).catch(e => console.log(e))
        instance.get(`/dislikes/${props.articleID}`).then(res => {
                setDislikes(res.data)
            }
        ).catch(e => console.log(e))
        instance.get(`/dislike/${props.articleID}/${cookie.userId}`)
            .then(r=> {
                setAlreadyDis(r.data.already)
            }).catch(e=>console.log(e))
        instance.get(`/like/${props.articleID}/${cookie.userId}`)
            .then(r=> {
                setAlready(r.data.already)
            }).catch(e=>console.log(e))
    }, [props.articleID, update,cookie.userId])
    //Like
    const setLike=()=>{
        instance.post(`/likes/${props.articleID}`,
            {userID:props.userID,fromUserID:cookie.userId})
            .then(r=> {
                setUpdate(!update)
                // console.log(r.data)
            }).catch(e=>console.log(e))
    }
    const setUnLike=()=>{
        instance.delete(`/likes/${props.articleID}/${cookie.userId}/${props.userID}`)
            .then(r=> {
                setUpdate(!update)
                console.log(r.data)
            }).catch(e=>console.log(e))
    }
    //Dislike
    const setDisLike=()=>{
        instance.post(`/dislikes/${props.articleID}`,
            {userID:props.userID,fromUserID:cookie.userId})
            .then(r=> {
                setUpdate(!update)
                console.log(r.data)
            }).catch(e=>console.log(e))
    }
    const setUnDisLike=()=>{
        instance.delete(`/dislikes/${props.articleID}/${cookie.userId}/${props.userID}`)
            .then(r=> {
                setUpdate(!update)
                console.log(r.data)
            }).catch(e=>console.log(e))
    }
    const checkID=(cookie.userId===props.userID)
    return (<div>
        {cookie.authorized&&<div className="likesBlock container">
            {/*{`checkID${checkID}already${already}`}*/}
            <span disabled={checkID}
                  onClick={!already?setLike:setUnLike}
                  className='like'>&#10084; {likes}</span>
            <span disabled={checkID}
                  onClick={!alreadyDis?setDisLike:setUnDisLike}
                  className="dislike">&#128078; {dislikes}</span>
        </div>}
    </div>)
}

export default withRouter(Likes)