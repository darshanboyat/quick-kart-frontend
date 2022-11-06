import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Register'
import Male from './Components/Category/male/Male'

function URLcheck(){
  const str = window.location.pathname

  if(str === '/admin')
    return "hello"
  else
    return <Navbar/>
}

if (document.readyState == "complete") {
  console.log("Your page is loaded");
}

function App() {
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
        <Route path='/category/male' element={<Male/>}/>   
        {/* <Route path='/auth/register' element={<Register/>}/>    */}
      </Routes>
      <h6 style={{color: "white"}}>&copy; All rights reserved 2022</h6>
    </div>


    </>
  );
}

export default App;
