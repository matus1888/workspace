import { useLocation } from 'react-router-dom'
const Header = () => {
let  path=useLocation().pathname
    return (
        <header><h2>this is my Header component</h2>
            <span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
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