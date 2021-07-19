import React, {useEffect, useState} from 'react'
import {instance} from "../Register/RegisterPage";
import Upload from "../Upload";

const Profile=()=>{
    const getCookie=()=>{return JSON.parse(document.cookie)?JSON.parse(document.cookie):{authorized:false}}
    let cookie=getCookie()
    const [state,setState]= useState(null)
    const [change,setChange]= useState(false)
    const [file,setFile]= useState(null)
    const [updater,setUpdater]=useState(false)
    // console.log(file)
    const setData=()=>{
        instance.put(`/users/${state[state.length-1].name}`
            , {newName:state[state.length-1].name,avatar:file?file:state[state.length-1].avatar})
            .then(res=> {
                console.log(res.data)
                setUpdater(!updater)
            }).catch(e=>console.log(e))
    }
    const getMyData=()=>{
        let cookie=getCookie()
       if(cookie&&cookie.userId){
           instance.get(`/user/${cookie.userId}`).then(res=>
               setState(res.data)).catch(e=>console.log(e))
       }
    }
    useEffect(getMyData,[cookie.userId, updater])
    return(<div>
            {state&&<div>
                <img style={{"width":"80px"}} src={state[state.length-1].avatar} alt="ava"/>
                <button className="btn btn-primary"
                        onClick={()=>setChange(!change)}>Сменить аватар</button>
                {change&&<Upload getter={setFile}/>}
                <div>имя: {state[state.length-1].name}</div>
                <button className="btn btn-danger" onClick={setData}>Сохранить</button>
            </div>}
        </div>)
}

export default Profile

