import React from 'react';
import {useNavigate} from "react-router-dom"

function NavbarAdmin() {
  const navigate = new useNavigate()

  const logout = () => {
    localStorage.removeItem('token');
    navigate("/admin/login")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><strong className = 'log'>Quick Kart</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/admin">
            Orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">
            Queries
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/admin">
            Profile
          </a>
        </li>
      </ul>
      <button type="button" className="btn btn-danger" onClick={logout}>Log Out</button>
    </div>
  </div>
</nav>

    </>
  );
}

export default NavbarAdmin;