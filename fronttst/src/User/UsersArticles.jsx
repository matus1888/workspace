import React, {useEffect} from 'react'
import {Redirect, useParams, withRouter} from "react-router";
import {useState} from "react";
import {instance} from "../Components/RegisterPage";

const UserArticles = () => {
    const [state, setState] = useState(false)
    const [articles, setArticles] = useState([])
    const [redir,setRedir]= useState(false)
    const [count, setCount]=useState(false)
    let {id} = useParams()
    let getArt = () => {
        instance.get(`/articles/${id}`).then((res) => {
            setArticles(res.data)
        })
    }
    let deleteArt = (x) => {
        instance.delete(`/articles/${id}`, {data: {heading: x.heading}}).then(res => {
                // console.log(res.status, res.data.text)
                getArt()
            }
        )
    }
    useEffect(getArt,[id])
    useEffect(() => {
        if (articles.length === 0&&!count) {
            setCount(true)
        }
    },[articles.length, count])
    return (<div className='container'>
        {articles.length === 0 && <div>идет загрузка подождите</div>}
        {state && <Redirect to={`/builder/${id}`}/>}
            {redir&&<Redirect to={`/one_article/${redir.id}`}/>}

        <h2>Ваши статьи</h2><div className={'container align-items-end'} >
        {articles.length !== 0 && articles.map(x =>
           <div key={x.id} className={'row'}>
               <div   className='col'  >
                   <span className={'col '}>name: {x.heading}</span>
                   <button  className={'btn btn-danger col'}
                            onClick={() => deleteArt(x)}
                   >  X</button><button
                   onClick={()=>setRedir({id:x.id})}
                   className='btn btn-secondary col'>Посмотреть</button></div>
           </div>)}

           </div>
        <button className="btn btn-primary"
                onClick={() => setState(true)}
        >Создать статью
        </button>
    </div>
        )
}
export default withRouter(UserArticles)