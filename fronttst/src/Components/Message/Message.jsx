import React, {useState} from 'react'
import "./Message.css"

const Message = (props) => {
    const [state,setState]= useState(props.set||false)
    if(state){
        setTimeout(()=>setState(false),3000)
    }
    return (
        <span className={state ? "messageWrapper" : "messageWrapperNo"}>
        <div className={props.error?"messageBodyError":"messageBodyMessage"}>
            <span className="messageHeader">{props.header}</span>
            <div className="messageContent">{props.body}</div></div>
    </span>
    )
}

export default Message