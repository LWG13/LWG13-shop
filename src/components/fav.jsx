import "./cart.scss"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom" 
import goback from "./goback.png"
import { useQuery } from "react-query"
import star from "./star.png"
import axios from "axios"
import heart from "./heart.png"
import Footer from "./footer.jsx"
import {Grid} from "@mui/material"
import {removeFromFav} from "./ReduxToolkit/favSlice"
export default function Favourite() {
  const { data : datas } = useQuery("products", () => axios.get("https://ecommerce-server-y5yv.onrender.com/product"))
  const fav = useSelector(state => state.fav)
  const dispatch = useDispatch()
  return(
        <div className="cart">
          <div className="grid">
      <div className="naviDetail1">
        <Link to="/" className="goback1">
        <img src={goback} alt="go back" />
        </Link>
      </div>
          </div>
      <div className="gridO">
      <div className="gridDetail">
      <div className="cart-box">
        
        <h2>Favourite Product</h2>
        
          {fav.favItem.length === 0 ? (
      <div className="empty">
       <p>Your Favourite is currently empty</p>
       <Link to="/" className="start-shopping">Start Shopping</Link>
      </div>
          ) : (
            <div className="cart-items">
              {fav.favItem.map(fav => (
             
             <div className="cart-item" key={fav._id}>
              
              <div className="cart-product">
                <img src={fav.image} alt="product" />
                <div style={{paddingLeft: 10}}>
                  <h2 className="name">{fav.title}</h2>
                  <p>${fav.price}</p>
                </div>
              </div>
              <div className="cart-pad">
                
           <img src ={heart}  alt ="heart" className="heart" onClick={() => dispatch(removeFromFav(fav))} width="30px"/>  
                
         </div>
            
             </div>
              ))}
              
                            <div className="product-box2">
            <h2 style={{textAlign: "center"}}>Featured For You</h2>
            <Grid container my={4}>
              {datas && datas.data && Array.isArray(datas.data) ? 
                datas.data.map((item) => 
                <Grid item xs={6} sm={4} md={4}>
                 <Link to={`/${item._id}`}  className="product-item2">
                  <img src={item.image} alt="product" />
                  <p>{item.title}</p>
                  <span className="price2">${item.price}</span>
                  <div className="product-category"><span>{item.category}</span></div>
                 </Link>
                </Grid>
              ): <p>loading..</p>}
              </Grid>
                               <Link to="/category" className="linkMore"><div className="more"><button className="moreButton">Look More</button></div></Link>
             </div>
              <Footer />
            </div>
       )}
      </div>
      </div>
      </div>
      </div>
  )
}
