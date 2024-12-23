 

import {useQuery} from "react-query"
import goback from "./goback.png"
import axios from "axios"
import {useParams} from "react-router-dom"
import Crumb from "./crumb.jsx"
import {Grid} from "@mui/material"
import star from "./star.png"
import "./detail.scss"
import { useState, useLayoutEffect, useEffect} from "react"
import Footer from "./footer.jsx"
import shopping from "./shopping.png"
import { Link} from "react-router-dom"
import heart from "./heart.png"
import nonHeart from "./nonHeart.png"
import { useDispatch } from "react-redux"
import { addToFav } from "./ReduxToolkit/favSlice"
import { addToCart } from "./ReduxToolkit/cartSlice"
export default function Detail() {
  const { data : datas } = useQuery("products", () => axios.get("https://ecommerce-server-y5yv.onrender.com/product"))
  const [hearts, setHearts] = useState(false)
  const dispatch = useDispatch()
  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    
  }
  const { productId }= useParams()
  const { data } = useQuery({ 
    queryKey: ["products", productId],
    queryFn: () => axios.get(`https://ecommerce-server-y5yv.onrender.com/product/${productId}`)
  })
  console.log(productId)
  console.log(data)
  const [count, setCount] = useState(1)
  useLayoutEffect(() => {
   if(count < 1) setCount(1)
  }, [count])
  return(
   <div className="i">
   <div className="grid">
    <div className="naviDetail">
    <Link to="/lwg13-shop.git/" className="goback" >
     <img src={goback} alt="go back" />
    </Link>
    <Link to="/lwg13-shop.git/cart">
     <img src={shopping} alt="cart" />
    </Link>
    </div>
   </div>
  <div className="gridO" >
   <div className="gridDetail">
    <div className="detail">
      <Crumb />
      <Grid container>
      {data?.data &&
        <div>
         <div className="product-item">
         <Grid item xs={12} sm={4} md={4}>
          <img src={data?.data.image} alt="product" />
         
         </Grid>
         <Grid item xs={12} sm={8} md={8}>
         <div className="info-detail">
        <Grid container> 
         <Grid item xs={10} >
          <h1>{data?.data.title}</h1>
         </Grid>
          <Grid item xs={2}>
          <img className="heartful" src={heart} alt="heart" onClick={() => dispatch(addToFav(data?.data))} />
          </Grid>   
         </Grid>
        
      
         <span className="price">${data?.data.price}-$48</span>
         <span className="ca"><span className="cate">Category</span><span>{data?.data.category}</span></span>
           <span className="ca"><span className="cate">Shipping Type</span><span>Free Shipping</span></span>
         <div className="buy">
           <button className="button1">Buy Now</button>
            <button className="button2" onClick={() => handleAddToCart(data?.data)}>Add To Cart</button>
         </div>
         </div>
         </Grid>
         <br/>
         
        </div>
       <div className="desc">
           <h2>Description</h2>
           <span>{data?.data.description}</span>
       </div>
       <div className="userProfile">
         <h2>User Product</h2>
        <Link to={`/lwg13-shop.git/profile/${data?.data.userId}`} className="userDetail">
         <img src={data?.data.userImage} alt="" />
         <div className="userInfo">
          <p style={{fontSize: "23px"}}>{data?.data.username}</p>
          <span style={{color: "gray", marginRight: "10px"}}>Click to see user profile</span>
         </div>
        </Link>
       </div>
          <div className="product-box1">
            <h2 style={{textAlign: "center"}}>Featured Products</h2>
            <Grid container my={4}>
              {datas && datas.data && Array.isArray(datas.data) ? 
                datas.data.map((item) => 
                <Grid item xs={6} sm={3} md={4}>
                 <Link to={`/lwg13-shop.git/${item._id}`}  className="product-item1" key={item._id}>
                  <img src={item.image} alt="product" />
                  <p>{item.title}</p>
                  <span className="price1">${item.price}</span>
            
                 </Link>
                </Grid>
              ): <p>loading..</p>}
              </Grid>
               <Link to="/lwg13-shop.git/category" className="linkMore"><div className="more"><button className="moreButton">Look More</button></div></Link>
            </div>
        
          <Footer />
        
          <div className="secNaviDetail">
             <button className="button1">Buy Now</button>
             <button className="button2" onClick={() => handleAddToCart(data?.data)}>Add To Cart</button>
           </div>
        </div>
           
      }
      </Grid>
    </div>
   </div>
   </div>
   </div>
  )
}
