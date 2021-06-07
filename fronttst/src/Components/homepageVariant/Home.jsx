import {instance} from "../../Components/RegisterPage";
import {useEffect, useState} from "react";
import MarkdownView from "react-showdown";
import avatar from '../../images/avatar.png'

const Home = ()=>{
    const [state,setState]=useState(null)
    useEffect(()=>{
        instance.get('/articles').then((res)=> {
            setState(res.data)
        }).catch((error)=>console.log(error))
    }, [])

    return(<div>
        <h5>This is Home Page </h5>
        <div className={'row'} style={{'display': 'flex', 'justifyContent':'center'}}>
        {state?state.map(x=>
                <div key={x.id+x.heading} className={'col-auto'}>
                    <div  className="card" style={{"width": "18rem"}}>
                    <img src={x.avatar?x.avatar:avatar} style={{'width':'40px',}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-danger ">{x.heading}</h5>
                        <MarkdownView className="card-text"
                                       style={{"height": "20vmin","overflow":"auto"}}
                            id={'output'}
                                          markdown={x.body}
                                          options={{emoji: true}}/>
                        <a href={`https://localhost:3001/one_article/${x.id}`} className="btn btn-primary">Просмотреть</a>
                    </div>
                    </div>
            </div>)

            /*разметка по умолчанию*/
            :<div><h5>This is Home Page </h5>
            <div style={{'display': 'flex', 'justifyContent':'center'}}>
                <div className="card" style={{"width": "18rem"}}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card's content.</p>
                        <a href={'/'} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>}
        </div>
        </div>
)
            }
export default Home