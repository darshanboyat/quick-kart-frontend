import React from 'react';

function NavBar() {
  const [loginStatus, setLoginStatus] = React.useState(false)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: "black" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><strong className='log'>Quick Kart</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {
                !loginStatus ? <>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/auth/register">
                      Register
                    </a>
                  </li>
                </> :
                  <li className="nav-item">
                    <a className="nav-link" href="/cart">
                      Cart
                    </a>
                  </li>

              }
              <li className="nav-item">
                <a className="nav-link" href="/#About">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex" style={{ backgroundColor: "#24272e" }}>
              <input className="form-control me-3 mt-4" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  );
}

export default NavBar;