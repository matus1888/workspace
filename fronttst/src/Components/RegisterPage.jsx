import {useState} from "react";
import axios from 'axios';
import React from 'react'
import {Redirect, withRouter} from "react-router";

export const instance=axios.create({
    baseURL:"https://tst.matus.keenetic.name",
    headers: {"Access-Control-Allow-Origin": "*"}
})

const RegisterPage = () => {
    const [state, setState] = useState({checked:false})
    let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let check=()=>{
        setState({...state, checked: !state.checked})
    }
    let getEmail = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let getAvaLink = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let getPassword = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let getConfirmPass= (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let buttonPress = () => {
        if (state&&reg.test(state.email)) {

            if(state.password&&state.password===state.confirmPass){
                instance.get(`users/${state.email}`).then(
                    (res)=> {
                    if(res.data[0]){
                        setState({...state, busy: true})
                    }else{
                        console.log(' вроде норм', state)
                        instance.post(`users/${state.email}`, {name:state.email, password: state.password, avatar:state.ava}).then(
                            res=>{
                                console.log(res)
                                setState({...state, login:true})
                            }
                        )
                    }
                    })
            }else{
                console.log('пароли не совпадают')
                setState({...state,notEquals:true})
            }
        } else {
            console.log('email хуевый')
            setState({...state,emailIsBad:true})
        }
    }
    return (<div style={{'display': 'grid', 'justifyContent': 'center'}}>
        {state&&state.login&&<Redirect to={`/login`}/>}
        <div className="container">
            <h5>Введите email</h5><input name='email' style={{"width":"80%"}} type="email" onChange={getEmail}/>
            {state?state.busy&&<h6 style={{color:'red'}}>Пользователь с таким email уже существует</h6>:setState({...state, busy:false})}
            {state?state.emailIsBad&&<h6 style={{color:'red'}}>Неправильный email</h6>:setState({...state, busy:false})}
        </div>
        <hr/>
        <div className="container mt-2">
            <h5>Придумайте пароль</h5><input name='password' style={{"width":"80%"}} type={state.checked?'text':'password'} onChange={getPassword}/><input style={{'margin':10}} type="checkbox" readOnly onClick={check} checked={state.checked}/>
        </div>
        <div className="container">
            <h5>Повторите пароль</h5><input name='confirmPass' style={{"width":"80%"}}  type={state.checked?'text':'password'} onChange={getConfirmPass}/>
        </div>
        <div className="container">
            <h5>Ссылка на аватар</h5><input name='ava' style={{"width":"80%"}} type="text" onChange={getAvaLink}/>
        </div>
        {state?state.notEquals&&<h6 style={{color:'red'}}>Пароли  не совпадают</h6>:setState({...state, busy:false})}
        <div style={{'margin': 10}}>
            <button className="btn btn-primary"
                    onClick={buttonPress}
            >Зарегистрироваться
            </button>
        </div>
    </div>)
}
export default withRouter(RegisterPage)