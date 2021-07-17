import React from 'react'
import {instance} from "../Register/RegisterPage";
import {useEffect, useState} from "react";
import MarkdownView from "react-showdown";
import Likes from "../Likes/Likes";
import {withRouter} from "react-router";


export const Context=React.createContext({})

const Home = ({history}) => {
    const [state, setState] = useState(null)
    const [users, setUsers] = useState(null)


    // console.log('state Home', state)


    useEffect(() => {
        instance(`/users`).then(res => {
            setUsers(res.data)
        }).catch((e) => console.log(e))
        instance.get('/articles').then((res) => {
            setState(res.data)
        }).catch((error) => console.log(error))
    }, [])
    return (<div>
                <div className="container mb-3">
                    <h5>Главная заглавная</h5>
                </div>
                <div className={'row'} style={{'display': 'flex', 'justifyContent': 'center'}}>
                    {state && users ? state.map(x =>
                                <div key={x.id + x.heading} className={'col-auto'}>
                                    <div className="card mb-2" style={{"width": "50vmin"}}>
                                        <img src={users.filter(el => el.id === x.userid)[0]!==undefined?
                                            users.filter(el => el.id === x.userid)[0].avatar:'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'}
                                             style={{'width': '80px', 'marginLeft': "0.5rem", 'marginTop': '0.5rem','borderRadius':"30px"}}
                                             className="card-img-top" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title text-danger ">{x.heading}</h5>
                                            <MarkdownView className="card-text"
                                                          style={{"height": "20vmin", "overflow": "auto"}}
                                                          id={'output'}
                                                          markdown={x.body}
                                                          options={{emoji: true}}/>
                                            <button onClick={()=>history.push(`/one_article/${x.id}`)} className="btn btn-primary">Читать
                                                целиком</button>
                                            <Likes articleID={x.id} userID={x.userid}/>
                                        </div>
                                    </div>
                                </div>)
                        /*разметка по умолчанию*/
                        : <div>
                            <div style={{"display": "flex", "justifyContent": "center"}}><h5>Здравствуй, если ты тут, то
                                значит мой комп дома сдох!!!</h5></div>
                            <div style={{"display": "flex", "justifyContent": "center"}}><p
                                style={{"marginLeft": "20px", "color": "red"}}>Сервер на котором лежит база данных
                                отвалился, звоните, пишите, целую, ПУХ !!!</p></div>
                        </div>}
                </div>
        </div>
    )
}
export default  withRouter(Home)