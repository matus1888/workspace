import './builder.css'
import {useState} from "react";
import MarkdownView from 'react-showdown'
import {Redirect, useParams} from "react-router";
import {instance} from "./RegisterPage";


const ArticleBuilderPage = (props) => {
    const [state, setState] = useState({})
    const [check,setCheck]=useState(false)
    const [error,setError]=useState(undefined)
    const [message, setMessage]= useState(undefined)
    const [goHome,setGoHome]=useState(false)
    let {userId} = useParams()
    let getText = (event) => {
        setMessage(undefined)
        setError(undefined)
        setState({...state, [event.target.name]: event.target.value.toString()})
    }
    let getHeading = (event) => {
        setMessage(undefined)
        setError(undefined)
        setState({...state, [event.target.id]: event.target.value.toString()})
    }
    let handleClick = () => {
    setGoHome(true)
    }
    let addNewAtricleToDb = () => {
        if(state.heading&&state.text){
            setError(undefined)
            if (check){
                instance.put(`/articles/${userId}`,{heading: state.heading.trim(), text: state.text.trim()}).then(
                    (res)=> {
                        console.log('Ответ сервера:', res.status, res.data.text)
                    ;
                setMessage('замена произвдена успешно')
            })
            }else{
                instance.post(`/articles/${userId}`, {heading: state.heading.trim(), text: state.text.trim()}).then(
                    (res)=> {
                        console.log('Ответ сервера:', res.status, res.data.text);
                        setMessage('статья успешно добавлена')
                    }
                )
            }
        }else{
setError('....сначала заполните поля')
        }
    }
    return (<div>
        {goHome&&<Redirect to={`/user_page/${userId}`} />}
        <div style={{'margin':'10px','cursor':'pointer','fontWeight':'bold'}} onClick={handleClick}>Перети к моим статьям</div>
        {error&&<div style={{'color':'red'}}>{error}</div>}
        {message&&<div style={{'color':'green'}}>{message}</div>}
        <span>Заменить статью <input type="checkbox"
        checked={check} onChange={()=>setCheck(!check)}
        /></span>
            <input style={{'marginLeft': '10px'}}type="text"
                   id='heading'
                   placeholder={'Введите пожалуйста заголовок'}
                   onChange={getHeading}
                   value={state && state.heading ? state.heading : ''}/><div id={'wrapper'}>

        <div id={'header'}>Введите MD разметку здесь</div>
        <div id={'body'}>
            <span id={'a'}>
                <textarea name="text"
                          id="input"
                          onChange={getText}
                          value={state ? state.text : ''}>
                </textarea>
            </span>
            <span id={'b'}>
                <MarkdownView id={'output'} markdown={state.text} options={{emoji: true}}/>
            </span>
            <div>
                <button onClick={addNewAtricleToDb}>Add this Article</button>
            </div>
        </div>

    </div>

    </div>)

}
export default ArticleBuilderPage