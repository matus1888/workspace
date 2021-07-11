import { useLocation } from 'react-router-dom'
const Header = () => {
let  path=useLocation().pathname
    return (
        <header>
            <span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <h2 style={{'marginTop': "0.5rem"}}>	&#9940; IT не торт</h2>
            <div className="navbar-expand" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className={`${path==='/'?'nav-link active':'nav-link' }`} aria-current="page" href="/"
                  >Домой</a>
                </li>
                <li className="nav-item">
                  <a className={`${path==='/register'?'nav-link active':'nav-link' }`}
                     href="/register"
                  >Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className={`${path==='/login'?'nav-link active':'nav-link' }`} href="/login"
                  >Войти</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
            </span>
            <hr/>
        </header>
    )
}
export default Header