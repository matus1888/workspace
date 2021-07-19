import React from 'react'
import {instance} from "../Register/RegisterPage";
import {useEffect, useState} from "react";
import MarkdownView from "react-showdown";
import Likes from "../Likes/Likes";
import {withRouter} from "react-router";
import './Home.css'
import Parser from '../../LogicComponents/ParserDate'


export const Context=React.createContext({})

const Home = ({history}) => {
    const [state, setState] = useState(null)
    const [users, setUsers] = useState(null)
    const [paginate, setPaginate] = useState(1)
    const [limit, setLimit]= useState(false)

    // console.log('state Home', state)

    useEffect(() => {
        instance(`/users`).then(res => {
            setUsers(res.data)
        }).catch((e) => console.log(e))
        instance.get(`/articles/${paginate}`).then((res) => {
            setState(res.data)
            if(res.data.length===0){
                setLimit(true)
                setPaginate(paginate-1)
            }else if(res.data.length<10){
                setLimit(true)
            }
        }).catch((error) => console.log(error))
    }, [paginate])
    return (<div>
                <div className="container mb-3">
                    <h5>Главная заглавная</h5>
                </div>
                <div className="row homeRow" >
                    {state && users ? state.map(x =>
                                <div key={x.id + x.heading} className='homeColumn'>
                                    <div className="card mb-2 homeCard" >
                                        <img src={users.filter(el => el.id === x.userid)[0]!==undefined?
                                            users.filter(el => el.id === x.userid)[0].avatar
                                            :'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'}
                                             style={{'width': '80px', 'marginLeft': "0.5rem", 'marginTop': '0.5rem','borderRadius':"30px"}}
                                             className="card-img-top imgHome" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title text-danger ">{x.heading}</h5>
                                            <MarkdownView className="card-text"
                                                          style={{"height": "20vmin", "overflow": "auto"}}
                                                          id={'output'}
                                                          markdown={x.body}
                                                          options={{emoji: true}}/>
                                            <button onClick={
                                                ()=> {
                                                    history.push(`/one_article/${x.id}`)
                                                    window.scroll(0,0)
                                                }
                                            } className="btn btn-primary">Читать
                                                целиком</button>
                                            <div>{Parser(x.date)}</div>
                                        </div>
                                        <Likes articleID={x.id} userID={x.userid}/>
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
            {!limit&&<button onClick={() => setPaginate(paginate + 1)}>Показать еще</button>}
            {paginate>=2&&<button onClick={()=> {
                setPaginate(paginate - 1)
                setLimit(false)
            }}>Предыдущие 10</button>}
        </div>
    )
}
export default  withRouter(Home)