import React, {useEffect, useState} from 'react'
import {instance} from "../Register/RegisterPage";

const Comments = (props) => {
    const [state, setState] = useState(undefined)
    const [enable, setEnable] = useState(false)
    const [text, setText] = useState({})
    const [update,setUpdate] = useState(false)
    let cookie = ''
    document.cookie === '' ? cookie = '{"authorized":false}' : cookie = JSON.parse(document.cookie)

    const setNewComment = () => {
        instance.post(`/comments/${props.articleID}`,{userID:cookie.userId,comment:text.text}).then(res=>{
            console.log(res.data)
            setText('')
            setUpdate(!update)
        }).catch(e=>console.log(e))
    }
    const getCommentsOfArticle = () => {
        instance.get(`/commentsMitUsers/${props.articleID}`).then(res => setState(res.data)).catch(e => console.log(e))
    }
    useEffect(getCommentsOfArticle, [props.articleID,update])
    let getText = (event) => {
        setText({...text, [event.target.name]: event.target.value.toString()})
    }
    return (
        <div className="container bg-body ma-3"> Комментарии
            {state && state.map(x => <div key={x.name + Math.random() * 90}>
                <div className="container">
                    <img style={{"width": "20px"}} src={x.avatar} alt=""/>{x.name}
                </div>
                <span className="container ma-3">{x.comment}</span>

            </div>)}
            {cookie.authorized &&
            <button className="btn-primary" onClick={() => setEnable(!enable)}>Добавить комментарий</button>}
            {enable && <div>
            <textarea name="text"
                      id="input"
                      onChange={getText}
                      value={text ? text.text : ''}>
                </textarea>
                <button onClick={setNewComment}>Отослать</button>
            </div>
            }
        </div>)
}
export default Comments