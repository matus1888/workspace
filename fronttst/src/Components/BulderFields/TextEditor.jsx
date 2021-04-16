import './TextEditor.css'

import {useState} from "react";
import Previewer from "./Previewer";

const TextEditor = () => {
    const [state, setState] = useState(null)
    let Edit = (event) => {
        setState({[event.target.name]: event.target.value})

    }
    return (<span id={'b'}>
               <Previewer markup={state?state.text:'тут будет разметка'}/>
               <textarea id={'input'} name='text' type="text" onChange={Edit} value={state ? state.text : ''}></textarea>
            </span>)
}

export default TextEditor