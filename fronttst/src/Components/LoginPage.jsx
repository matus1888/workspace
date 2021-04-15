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
                // console.log(res.data[0])
                if (res.data[0]&&res.data[0].password === state.password) {
                    setState({...state, redirect:true})
                    // console.log('пользователь существует и пароль совпал')
                } else {
                    setState({...state, error: true})
                }
            })
    }
    let check=()=>{
        setState({...state, checked: !state.checked})
    }
    return (<div>
        {state&&state.redirect&&<Redirect to={'/user_page'}/>}
        <div style={{'fontSize':'200%', 'display':'flex','justifyContent':'center', 'margin':10 }}>
            ВХОД</div>
        <div style={{'display': 'grid', 'justifyContent': 'center'}}>
            <div className="container">
                <h5>Введите email</h5><input name='email' type="email" onChange={getData}/>
            </div>
            <div className="container mt-2">
                <h5>Введите пароль</h5><input name='password' type={state.checked?'text':'password'} onChange={getData}/><input style={{'margin':10}} type="checkbox" readOnly onClick={check} checked={state.checked}/>
            </div>
            <div style={{'margin': 10}}>
                {state && state.error && <div style={{'color': 'red', 'marginBottom': 10}}>email или пароль неверный</div>}
                <button className="btn btn-primary"
                        onClick={clickOnSubmit}
                >Войти
                </button>

            </div>
        </div>
    </div>)
}
export default LoginPage