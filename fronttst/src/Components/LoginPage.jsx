import {useState} from "react";
import {instance} from "./RegisterPage";
import {Redirect} from "react-router";

const LoginPage = () => {
    const [state, setState] = useState({checked:false})
    let getData = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    let clickOnSubmit = () => {
        instance.get(`users/${state.email}`).then(
            (res) => {
                if (res.data[0] === undefined) {
                    setState({...state, error: true})
                }
                if (res.data[0]&&res.data[0].password === state.password) {
                    document.cookie=`{"authorized":true,"userId":${res.data[0].id}}; max-age=300; secure`
                    setState({...state, redirect:true, userId: res.data[0].id})

                    // console.log('пользователь существует и пароль совпал')
                } else {
                    setState({...state, error: true, message:'email или пароль неверный'})
                }
            })
            .catch(setState({...state,error:true, message:'сервер не прислал ответа'}))
    }
    let check=()=>{
        setState({...state, checked: !state.checked})
    }
    return (<div>
        {state&&state.redirect&&<Redirect to={`/user_page/${state.userId} `}/>}
        <div style={{'fontSize':'200%', 'display':'flex','justifyContent':'center', 'margin':10 }}>
            ВХОД</div>
        <div style={{'display': 'grid', 'justifyContent': 'center'}}>
            <div className="container">
                <h5>Введите email</h5><input name='email' type="email" style={{"width":"80%"}} onChange={getData}/>
            </div>
            <div className="container mt-2">
                <h5>Введите пароль</h5><input name='password' style={{"width":"80%"}} type={state.checked?'text':'password'} onChange={getData}/><input style={{'margin':10}} type="checkbox" readOnly onClick={check} checked={state.checked}/>
            </div>
            <div style={{'margin': 10}}>
                {state && state.error && <div style={{'color': 'red', 'marginBottom': 10}}>{state.message}</div>}
                <button className="btn btn-primary"
                        onClick={clickOnSubmit}
                >Войти
                </button>

            </div>
        </div>
    </div>)
}
export default LoginPage