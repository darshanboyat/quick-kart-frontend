import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Male from './Components/Category/male/Male'
import Female from './Components/Category/female/Female'
import Common from './Components/Category/Common'
import Cart from './Components/Cart/Cart';
import Admin from './Components/Admin Section/Admin'
import NavbarAdmin from './Components/Admin Section/NavbarAdmin'

function URLcheck(){
  const str = window.location.pathname

  if(str === '/admin')
    return <NavbarAdmin/>
  else
    return <Navbar/>
}

if (document.readyState == "complete") {
  console.log("Your page is loaded");
}


function App() {
  const [login, setLogin] = useState(true)
  return (
    <>
    <div className="App">
      {
        URLcheck()
      }

      <Routes>
        <Route path='/' element={<Home/>}/>   
        <Route path='/auth/login' element={<Login/>}/>   
        <Route path='/auth/register' element={<Register/>}/>   
        <Route path='/category/male' element={<Male loginStatus = {login}/>}/>   
        <Route path='/category/female' element={<Female loginStatus = {login}/>}/>   
        <Route path='/category/common' element={<Common/>}/>   
        <Route path='/cart' element={<Cart/>}/>   
        <Route path='/admin' element={<Admin/>}/>   
      </Routes>
      <h6 style={{color: "white"}}>&copy; All rights reserved 2022</h6>
    </div>


    </>
  );
}

export default App;
