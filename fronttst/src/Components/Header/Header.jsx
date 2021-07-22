import React from 'react'
import {withRouter} from "react-router";
import "./Header.css"
import logo from "../../../src/images/home.svg"
import logout from "../../../src/images/logout.svg"
import login from "../../../src/images/login.svg"
import user from "../../../src/images/user.svg"

const Header = ({history, location})=>{
    let cookie = ''
    document.cookie === '' ? cookie = '{"authorized":false}' : cookie = JSON.parse(document.cookie)
    let isMobile=()=> {
        let type=  window.matchMedia("(max-width: 540px)").matches
        return type
    }
    let mobile=isMobile()

    return (
        <header className="head">
            <span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light header">
          <div className="container-fluid">
              <h2 style={{'marginTop': "0.5rem"}} ><span role='img' aria-label='iconNotTort'>&#9940;</span> IT не торт</h2>
            <div className="navbar-expand" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {mobile?<span className="nav-link" onClick={() => {
                      history.push('/')}}><img src={logo} alt="homeImage"/></span>:<span
                      className={location.pathname === '/' ? "nav-link active" : "nav-link"}
                      aria-current="page" onClick={() => {
                      history.push('/')
                  }}
                  >Домой</span>}
                </li>
                  {cookie.authorized&&<li className="nav-item">
                      {mobile
                          ?<span className="nav-link"
                                 onClick={() => {
                                     history.push('/profile')
                                 }}>
                              <img src={user}
                                   className="headerNav"
                                   alt=""/>
                          </span>:
                          <span
                          className={location.pathname === '/profile' ? "nav-link active" : "nav-link"}
                          aria-current="page" onClick={() => {
                          history.push('/profile')
                      }}
                      >Моя страница</span>}</li>}
                  {!cookie.authorized&&<li className="nav-item">
                    <span
                        className={location.pathname === '/register' ? "nav-link active" : "nav-link"}
                        aria-current="page" onClick={() => {
                        history.push('/register')
                    }}>Регистрация</span>
                  </li>}
                <li className="nav-item">
                    {mobile
                        ?<span className="nav-link"
                               onClick={cookie.authorized
                                   ? () => {
                                       history.push('')
                                       document.cookie = `{authorized:false,"userId":1}; max-age=0; secure`
                                   }
                                   : () => {
                                       history.push('/login')
                                   }}>
                            <img
                            className="headerNav"
                            src={cookie.authorized?logout:login} alt="logoutImage"/>
                        </span>
                        :<span
                            className={location.pathname === '/login' ? "nav-link active" : "nav-link"}
                            aria-current="page"
                            onClick={cookie.authorized
                                ? () => {
                                    history.push('')
                                    document.cookie = `{authorized:false,"userId":1}; max-age=0; secure`
                                }
                                : () => {
                                    history.push('/login')
                                }}>{cookie.authorized ? 'Выйти' : 'Войти'}
                    </span>}
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
export default withRouter(Header)