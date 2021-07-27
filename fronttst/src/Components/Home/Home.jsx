import React, {useEffect, useState} from 'react'
import {instance} from "../Register/RegisterPage";
import MarkdownView from "react-showdown";
import Likes from "../Likes/Likes";
import {withRouter} from "react-router";
import './Home.css'
import Parser from '../../LogicComponents/ParserDate'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


export const Context=React.createContext({})

const Home = ({history}) => {
    const [state, setState] = useState(null)
    const [users, setUsers] = useState(null)
    const [paginate, setPaginate] = useState(1)
    const [limit, setLimit]= useState(false)
    const [enable, setEnable]= useState(false)

    // console.log('state Home', state)

    useEffect(() => {
      let TO=setTimeout(()=> {
           setEnable(true)
       },3000)
        instance(`/users`).then(res => {
            setUsers(res.data)
        }).catch((e) => console.log(e))
        instance.get(`/articles/${paginate}`).then((res) => {
            setState(res.data)
            clearTimeout(TO)
            setEnable(false)
            if(res.data.length===0){
                setLimit(true)
                setPaginate(paginate-1)
            }else if(res.data.length<9){
                setLimit(true)
            }
        }).catch((error) => console.log(error))
    }, [paginate])
    return (<div className="allHome">
                <div className="container mb-3 homeWrapper">
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
                                                          style={{"height": "40vmin", "overflow": "auto"}}
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
                        :
                        <div className="loader">
                            <Loader
                                type="Rings"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={3000} //3 secs
                            />
                            {enable&&<div>
                                <div>
                                    <div className="plugHead"><h4>Печалька</h4></div>
                                    <div>Если вы видите эту надпись, то видимо сервер не прислал ответа</div>
                                    <div>В большинстве случаев это решаемая проблема</div>
                                    <div>Поэтому позвоните или напишите мне....</div>
                                </div>
                            </div>}
                        </div>
                    }
                </div>
            {!limit&&<button className="btn btn-primary" onClick={() => setPaginate(paginate + 1)}>Показать еще</button>}
            {paginate>=2&&<button className="btn btn-primary" onClick={()=> {
                setPaginate(paginate - 1)
                setLimit(false)
            }}>Показать предидущие</button>}
        </div>
    )
}
export default  withRouter(Home)