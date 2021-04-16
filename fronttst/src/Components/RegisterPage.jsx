import {useState} from "react";
import axios from 'axios';
import {Redirect} from "react-router";


export const instance=axios.create({
    baseURL:"http://localhost:3000"
})

const RegisterPage = () => {
    const [state, setState] = useState(null)
    let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let getEmail = (event) => {
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
                        instance.post(`users/${state.email}`, {name:state.email, password: state.password}).then(
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
            <h5>Введите email</h5><input name='email' type="email" onChange={getEmail}/>
            {state?state.busy&&<h6 style={{color:'red'}}>Пользователь с таким email уже существует</h6>:setState({...state, busy:false})}
            {state?state.emailIsBad&&<h6 style={{color:'red'}}>Неправильный email</h6>:setState({...state, busy:false})}
        </div>
        <hr/>
        <div className="container mt-2">
            <h5>Придумайте пароль</h5><input name='password' type="password" onChange={getPassword}/>
        </div>
        <div className="container">
            <h5>Повторите пароль</h5><input name='confirmPass' type="password" onChange={getConfirmPass}/>
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
export default RegisterPage