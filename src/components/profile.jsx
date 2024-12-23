import { logoutUser } from "./ReduxToolkit/authSlice"
import { useSelector, useDispatch} from "react-redux"
import "./profile.scss"
import { useNavigate } from "react-router-dom"
import { Link,useParams, Outlet } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"

import goback from "./goback.png"
import shopping from "./shopping.png"
import { Grid } from "@mui/material"
import { useState } from "react"
export default function Profile() {

  const userId = useParams()
  const userId1 = userId.profileId
  const { data } = useQuery({ 
    queryKey: ["user", userId.profileId1],
    queryFn: () => axios.get(`https://ecommerce-server-y5yv.onrender.com/user/signup/${userId1}`)
  })
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   const auth = useSelector(state => state.auth)
  const handleLogout = () => {
    dispatch(logoutUser())
    navigate("/lwg13-shop/")
  }
  return (
    <div className="profile">
    <div className="grid">
    
  <div className="naviDetail">
    <Link to="/lwg13-shop/" >
     <img src={goback} alt="go back" width="90px" />
    </Link>
    <Link to="/lwg13-shop/cart">
     <img src={shopping} alt="cart" width="55px" className="shop"/>
    </Link>
     </div>
    </div>

    <div className="gridO">
      <div className="gridDetail">
      <div className="profileBox">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4} >
      <div className="profileInfo">
        <img src={data?.data.image} alt="avatar"/>
  
      <h2 style={{color: "white"}}>{data?.data.username}</h2>
        { data?.data._id === auth._id ? (<div className="buttonBox">
        <button><Link to="/lwg13-shop/admin">Admin</Link></button>
        <button onClick={handleLogout}>Log out</button>
      </div>): null}
        
      </div>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <div className="profileDetail" >
        <div className="list">
         <Link to={`/lwg13-shop/profile/${data?.data._id}`} className={page === 1 ? "link active" : "link"} onClick ={() => setPage(1)}>
          Profile
         </Link>
          <Link to={`/lwg13-shop/profile/${data?.data._id}/product`} className={page === 2 ? "link active" : "link"} onClick={() => setPage(2)}>
          Products
         </Link>
        </div>
        <Outlet />
        </div>
      </Grid>
      </Grid>
      </div>
      </div>
    </div>
    </div>
  )
}