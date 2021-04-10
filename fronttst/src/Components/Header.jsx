const Header = () => {
    return (
        <header><h2>this is my Header component</h2>
            <span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Домой</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/register">Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">Войти</a>
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