import React from 'react'
import {withRouter} from "react-router";

const Header = ({history, location}) => {
    return (
        <header>
            <span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <h2 style={{'marginTop': "0.5rem"}} ><span role='img' aria-label='iconNotTort'>&#9940;</span> IT не торт</h2>
            <div className="navbar-expand" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span style={{"cursor": "pointer"}}
                      className={location.pathname==='/'?"nav-link active":"nav-link"}
                      aria-current="page" onClick={()=>{
                      history.push('/')
                  }}
                  >Домой</span>
                </li>
                <li className="nav-item">
                    <span style={{"cursor": "pointer"}}
                    className={location.pathname==='/register'?"nav-link active":"nav-link"}
                    aria-current="page" onClick={()=>{
                    history.push('/register')}}>Регистрация</span>
                </li>
                <li className="nav-item">
                 <span style={{"cursor": "pointer"}}
                     className={location.pathname==='/login'?"nav-link active":"nav-link"}
                     aria-current="page" onClick={()=>{
                     history.push('/login')}}>Войти</span>
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