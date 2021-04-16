import './builder.css'
import {useState} from "react";
import MarkdownView from 'react-showdown'


const ArticleBuilderPage = (props) => {
    const [state,setState]=useState({})
    let getText=(event)=>{
        setState({...state, [event.target.name]:event.target.value})
    }
    return (<div id={'wrapper'}>
        <div id={'header'}>Напиши свою статью для блога</div>
        <div id={'body'}>
            <span id={'a'}>
                <textarea name="text"
                          id="input"
                          onChange={getText}
                          value={state ? state.text : ''}>
                </textarea>
            </span>
            <span id={'b'}>
                <MarkdownView id={'output'} markdown={state.text} options={{emoji:true}}/>
            </span>
            <div><button>Add this Article</button></div>
        </div>

    </div>)

}
export default ArticleBuilderPage