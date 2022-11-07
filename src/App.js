import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Male from "./Components/Category/male/Male";
import Female from "./Components/Category/female/Female";
import Common from "./Components/Category/Common";
import Cart from "./Components/Cart/Cart";
import Admin from "./Components/Admin Section/Admin";
import NavbarAdmin from "./Components/Admin Section/NavbarAdmin";
import Forget from './Components/Forget Password/Forget'

export default function App() {
  const [login, setLogin] = useState(true);
  function URLcheck() {
    const str = window.location.pathname;
    if (str === "/admin") return <NavbarAdmin />;
    else return <Navbar login={login} setLogin={setLogin}/>;
  }
  return (
    <>
      <div className="App">
        {URLcheck()}

        <Routes>
          <Route
            path="/"
            element={<Home login={login} setLogin={setLogin} />}
          />
          <Route path="/auth/login" element={<Login setLogin={setLogin} />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/category/male" element={<Male loginStatus={login} />} />
          <Route
            path="/category/female"
            element={<Female loginStatus={login} />}
          />
          <Route path="/category/common" element={<Common />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <h6 style={{ color: "white" }}>&copy; All rights reserved 2022</h6>
      </div>
    </>
  );
}
