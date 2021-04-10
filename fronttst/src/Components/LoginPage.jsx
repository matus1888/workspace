const LoginPage=()=>{
    return(<div>
        <div style={{'display': 'grid', 'justifyContent': 'center'}}>
            <div className="container">
                <h5>Введите email</h5><input name='email' type="text" />
            </div>
            <div className="container mt-2">
                <h5>Введите пароль</h5><input name='password' type="text" />
            </div>
            <div style={{'margin': 10}}>
                <button className="btn btn-primary"
                        onClick={()=>{console.log('нажали кнопку')}}
                >Зарегистрироваться
                </button>
            </div>
        </div>
    </div>)
}
export  default LoginPage