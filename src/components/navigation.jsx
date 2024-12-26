import "./Navigation.scss";
import React from "react";
import search1 from "./search.png";
import menu2 from "./menu.png"; 
import { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import help from "./help.png";
import home from "./home.png";
import cato from "./cato.png";
import setting2 from "./setting.png";
import { Link, useNavigate } from "react-router-dom";
import contact from "../../contact.png";
import fav from "./fav.png";
import user from "./user.png";
import shopping from "./shopping.png";
import Logo from "./Logo.png";
import { searchProduct } from "./ReduxToolkit/authSlice";

export default function Navigation() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [menu, setMenu] = useState(false);
  const [setting, setSetting] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    dispatch(searchProduct(search));
  };

  const handleHome = () => {
    auth.searchSuccess = false;
  };

  useEffect(() => {
    if (auth.searchSuccess === true) navigate("/search");
  });

  return (
    <div>
      <div className="outline">
        <div className="navi">
          <div className="navigation">
            <img src={menu2} onClick={() => setMenu(true)} alt="menu" className="ima" />
            {menu && <Menu menu={menu} setMenu={setMenu} auth={auth} />}
            <Link to="/" >
              <img src={Logo} alt="amd" className="logoWeb" />
            </Link>
            <div className="search">
              <input type="text" placeholder="Searching.." onChange={e => setSearch(e.target.value)} />
              {auth.searchLoading === true ? (<div class="spinner">
  <span class="spinner-inner-1"></span>
  <span class="spinner-inner-2"></span>
  <span class="spinner-inner-3"></span>
</div>) : <img src={search1} alt="search" onClick={handleSearch} />}
            </div>
            <div className="shopping-bag">
              <Link to="/cart" >
                <img src={shopping} alt="shop" />
              </Link>
              {cart.cartItem.length === 0 ? null : <span>{cart.cartItem.length}</span>}
            </div>
            <Setting setting={setting} setSetting={setSetting} auth={auth} />
            <Link to={auth.userLoaded ? `/profile/${auth._id}` : "/login"} className="user" >
              <img src={user} alt="user" />
            </Link>
          </div>
          <div className="secNavi">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/category" >Category</Link></li>
              <li><Link to="/favourite">Favourite</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
            </ul>
          </div>
        </div>
        <br />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
      <div className="navi-mobile">
        <Link className="item" to="/">
          <img src={home} alt="home" />
          <span className="linkm">Home</span>
        </Link>
        <Link className="item" to="/category" >
          <img src={cato} alt="category" />
          <span className="linkm">Category</span>
        </Link>
        <Link className="item" to={auth.userLoaded ? `/profile/${auth._id}` : "/login"} >
          <img src={user} alt="profile" />
          <span className="linkm">Profile</span>
        </Link>
      </div>
    </div>
  );
}

function Setting({ setting, setSetting, auth}) {
  const settingRef = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      if (!settingRef.current.contains(e.target)) {
        setSetting(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  });

  return (
    <div className="menuContainer1" ref={settingRef}>
      <div className="menu-trigger1" onClick={() => setSetting(!setting)}>
        <img className="image1" src={setting2} alt="menu" width="30px" />
      </div>
      <div className={`dropdownmenu1 ${setting ? "active1" : "deactive1"}`}>
        <Link to={auth.userLoaded ? `/profile/edit/${auth._id}` : "/login"} className="dropdownitem1" >
          <img src={setting2} alt="setting" />
          <p className="link1">Account Setting</p>
        </Link>
        <Link to="/faq" className="dropdownitem1">
          <img src={help} alt="help" />
          <p className="link1">Help and Feedback</p>
        </Link>
      </div>
    </div>
  );
}

function Menu({ menu, setMenu, auth}) {
  return (
    <div className={menu ? "sidenav active" : "sidenav"}>
      <div className="n">
        <img src={Logo} alt="logo" className="logo" />
        <span onClick={() => setMenu(false)}>&times;</span>
      </div>
      <hr />
      <div className="menu-item">
        <li>
          <Link to="/favourite" className="dropdownitem">
            <img src={fav} alt="bookmark" />
            <span>Favourite Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/faq" className="dropdownitem" >
            <img src={help} alt="help" />
            <span>Help and Feedback</span>
          </Link>
        </li>
        <li>
          <Link to={auth.userLoaded ? `/profile/edit/${auth._id}` : "/login"} className="dropdownitem" >
            <img src={setting2} alt="setting" />
            <span>Account Setting</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="dropdownitem" >
            <img src={contact} alt="setting" />
            <span>Contact</span>
          </Link>
        </li>
      </div>
    </div>
  );
}
