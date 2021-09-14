import {useState} from "react";
import axios from 'axios';
import React from 'react'
import {Redirect, withRouter} from "react-router";
import Upload from "../Upload";
import "./RegistrationPage.css"
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// export const URL="http://localhost:3000"
export const URL = "https://tst.matus.keenetic.name"
export const instance = axios.create({
    baseURL: URL,
    headers: {"Access-Control-Allow-Origin": "*"}
})

const RegisterPage = () => {
    const [state, setState] = useState({checked: false})
    console.log(state)
    let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let check = () => {
        setState({...state, checked: !state.checked})
    }
    let getEmail = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let getAvaLink = (link) => {
        setState({...state, ava: link})
    }
    let getPassword = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let getConfirmPass = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let buttonPress = () => {
        if (state && reg.test(state.email)) {

            if (state.password && state.password === state.confirmPass) {
                instance.get(`users/${state.email}`).then(
                    (res) => {
                        if (res.data[0]) {
                            setState({...state, busy: true})
                        } else {
                            console.log(' вроде норм', state)
                            instance.post(`users/${state.email}`, {
                                name: state.email,
                                password: state.password,
                                avatar: state.ava
                            }).then(
                                res => {
                                    console.log(res)
                                    setState({...state, login: true})
                                }
                            )
                        }
                    })
            } else {
                console.log('пароли не совпадают')
                setState({...state, notEquals: true})
            }
        } else {
            console.log('email хуевый')
            setState({...state, emailIsBad: true})
        }
    }
    return (<div className="registration-page__wrapper">
        <div>
        {state && state.login && <Redirect to={`/login`}/>}
        <div>
            <Typography variant={"h5"}>Введите email</Typography>
            <input name='email'
                   type="email"
                   onChange={getEmail}/>
            {state ? state.busy &&
                <Typography variant="h6" color="secondary">
                    Пользователь с таким email уже существует
                </Typography>
                : setState({
                    ...state,
                    busy: false
                })}
            {state ? state.emailIsBad && <Typography
                variant={"h5"}
            color={"secondary"}>
                Неправильный email
            </Typography> : setState({
                ...state,
                busy: false
            })}
        </div>
        <hr/>
        <div>
            <Typography variant={"h5"}>Придумайте пароль</Typography>
            <div className="RPContainerInputs">
                <input name='password'
                       type={state.checked ? 'text' : 'password'}
                       onChange={getPassword}/>
                <input style={{'margin': 10}} type="checkbox"
                       readOnly onClick={check}
                       checked={state.checked}/>
            </div>
        </div>
        <div>
            <Typography variant={"h5"}>Повторите пароль</Typography>
            <input name='confirmPass'
                   type={state.checked ? 'text' : 'password'}
                   onChange={getConfirmPass}/>
        </div>
        <div>
            <Upload getter={getAvaLink}/>
        </div>
        {state ? state.notEquals && <Typography variant={"h5"}>Пароли не совпадают</Typography> : setState({
            ...state,
            busy: false
        })}
        <div className="RPBtnContainer">
            <Button variant="contained"
                    onClick={buttonPress}
            >Зарегистрироваться
            </Button>
        </div>
        </div>
    </div>)
}
export default withRouter(RegisterPage)