import "./admin.scss"
import { Grid } from "@mui/material"
import productList from "../../productList.png"
import overview from "../../overview.png"
import { useState, useRef, useEffect } from "react"
import cato from "./cato.png"
import goback from "./goback.png"
import { Link, Outlet } from "react-router-dom"
import { useSelector} from "react-redux"
export default function Admin() {
  const auth = useSelector(state => state.auth)
  const [menu, setMenu] = useState(false)
  return(
    <div className="Admin">
      <div className="grid">
        <div className="naviDetail">
           <Link to={`/LWG13-shop/profile/${auth._id}`} className="goback1">
        <img src={goback} alt="go back" width="90px"/>
        </Link>
        <Setting menu={menu} setMenu={setMenu}/>
        </div>
      </div>
      <div className="gridO">
      <div className="gridDetail">
        <Grid container >
  
          <Grid item xs={4} sm={4} md={4} lg={4} >
           <div className="sidebar">
             <h1>Admin Panel</h1>
             
               <li className="sidebar-list"><Link to="/LWG13-shop/admin">Overview</Link></li>
               <li className="sidebar-list"><Link to="/LWG13-shop/admin/product">Your Product</Link></li>

            
           </div>
          </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} >
         <Outlet />
        </Grid>
        </Grid>
      </div>
      </div>
    </div>
  )
}
function Setting({menu, setMenu}) {
    useEffect(() => {
     let handler = (e) => {
       if(!settingRef.current.contains(e.target)){
         setMenu(false)
       }
     }
     document.addEventListener("mousedown", handler)
     return () => document.removeEventListener("mousedown",handler)
    })
  const settingRef = useRef(null)
  return (
       <div className="menuContainer10" ref={settingRef}>
         <div className="menu-trigger10" onClick={() => {setMenu(!menu)}} >
         <img className="image10" src={cato} alt="menu" width="60px"/>
         </div>
         <div className={`dropdownmenu10 ${ menu ? "active10" : "deactive10" }`}>
             <Link to="/LWG13-shop/admin" className="dropdownitem10" >
               <img src={overview} alt="overview" />
               <p className="link10" >Overview</p>
             </Link>
           <Link to="/LWG13-shop/admin/product"  className="dropdownitem10" >
              <img src={productList} alt="product list" />
               <p  className="link10" >Your Product</p>
             </Link>
         </div>
       </div>
  )
}