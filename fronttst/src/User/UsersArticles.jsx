import React, {useEffect} from 'react'
import {Redirect, useParams} from "react-router";
import {useState} from "react";
import {instance} from "../Components/RegisterPage";

const UserArticles = () => {
    const [state, setState] = useState(false)
    const [articles, setArticles] = useState([])
    const [count, setCount]=useState(false)
    let {id} = useParams()
    let getArt = () => {
        instance.get(`/articles/${id}`).then((res) => {
            setArticles(res.data)
        })
    }
    let deleteArt = (x) => {
        instance.delete(`/articles/${id}`, {data: {heading: x.heading}}).then(res => {
                console.log(res.status, res.data.text)
                getArt()
            }
        )
    }
    useEffect(() => {
        if (articles.length === 0&&!count) {
            getArt()
            setCount(true)
        }
    },[articles.length, count,getArt])
    return (<div className='container'>
        {articles.length === 0 && <div>идет загрузка подождите</div>}
        {state && <Redirect to={`/builder/${id}`}/>}
        <h2>Ваши статьи</h2>
        {articles.length !== 0 && articles.map(x => <div key={x.id}> name: {x.heading}
            <span
                style={{'color': 'red', 'margin': '20px', 'cursor': 'pointer'}}
                onClick={() => deleteArt(x)}
            >  X</span><button className='btn btn-secondary'>Посмотреть</button></div>)}
        <button className="btn btn-primary"
                onClick={() => setState(true)}
        >Создать статью
        </button>
    </div>)
}
export default UserArticles