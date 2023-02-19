import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function Navbar() {



  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token');
  }


  const [data, setData] = useState({})
  const [login, setLogin] = useState(false)

  useEffect(() => {
    const token = "Bearer " + localStorage.getItem('token')

    return async () => {
      await axios.get('http://localhost:3300/getUser', { headers: { 'Authentication': token } }).then(async res => {

        (res.data.sucess && setLogin(true))

        console.log('Login Status is :- ', login)
        await setData(res.data.data)
        console.log(data)
      })
    }
  }, [login])

  return (
    <>
      <div className='d-flex Navbar-container'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: "black", width: "100%" }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/"><strong className='log'>Quick Kart</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: '1%' }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                {
                  !login ? <>
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
                  </> : <>
                    <li className="nav-item">
                      <a className="nav-link" href="/cart">
                        Cart
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/myprofile">
                        My Profile
                      </a>
                    </li>
                  </>
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
                {login &&
                  <li className="nav-item" onClick={() => {
                    setLogin(false)
                    navigate('/')
                  }}>
                    <a href="/" className="nav-link btn btn-danger" style={{ color: 'white', marginTop: '-5%' }} onClick={logout}>
                      Logout
                    </a>
                  </li>
                }
              </ul>
              {login &&
                <div className='d-flex' style={{ flexDirection: 'column', justifyContent: 'end', textAlign: 'end', paddingRight: 50 }}>
                  <h6 style={{ color: 'white', fontWeight: 'light' }}>Welcome,</h6>
                  <h4 style={{ color: 'white' }}>{data.name}</h4>
                </div>
              }
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar