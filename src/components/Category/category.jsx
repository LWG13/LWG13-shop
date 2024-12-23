
import "./category.scss"
import { Grid } from "@mui/material"
import { useQuery } from "react-query"
import food from "./food.png"
import skin from "./skin.png"
import sport from "./sport.png"
import star from "../star.png"
import { Link, Outlet } from "react-router-dom"
import men from "./men.png"
import women from "./women.png"
import jewelery from "./jewelery.png"

import electronics from "./electronics.png"
import { useState } from "react"
import axios from "axios"

export default function Category() {
  const [page, setPage] = useState(0)
  const { data : datas } = useQuery(["products",page],() => axios.get(`https://ecommerce-server-y5yv.onrender.com/product?limit=${page}`))
  const [ display, setDisplay ]  = useState(false)
  const [all, setAll] = useState(true)
 
  const handleAll = () => {
    setAll(false)
    setDisplay(true)
  }
  const setALL = () => {
   setAll(true)
   setDisplay(false)
  }
  return (
    <div className="category">
      <Grid container spacing={3}>
        <Grid item xs={4} >
         <div className="category-links" >
          <h4>Category List</h4>
           <li className="category-link" onClick={() => setALL(true)}>
              <span style={{textAlign: "center"}}>All Category</span>
           </li>
          <Link to ="/lwg13-shop/category/men's clothing" className="category-link" onClick={() => handleAll()} >
          <img src={men} alt="men clothing" />
           <span >
             Men Clothing
           </span>
            
      
          </Link>
          <Link to ="/lwg13-shop/category/women's clothing" className="category-link" onClick={() => handleAll()}  >
            <img src={women} alt="women clothing" />
           <span>
              Women Clothing
           </span>
          </Link>
           <Link to ="/lwg13-shop/category/jewelery" className="category-link" onClick={() => handleAll()} >
             <img src={jewelery} alt="jewelery" />
            <span >Jewelery</span>
      
          </Link>
           <Link to="/lwg13-shop/category/electronics" className="category-link" onClick={() => handleAll()}  >
             <img src={electronics} alt="electronics" />
           <span>
              Electronics
           </span>
          </Link>
           <Link to="/lwg13-shop/category/skin care" className="category-link" onClick={() => handleAll()}  >
              <img src={skin} alt="skin care" />
            <span>
               Skin Care
            </span>
           </Link>
          <Link to="/lwg13-shop/category/food" className="category-link" onClick={() => handleAll()}  >
             <img src={food} alt="food" />
           <span>
              Food
           </span>
          </Link>
           <Link to="/lwg13-shop/category/sport" className="category-link" onClick={() => handleAll()}  >
              <img src={sport} alt="sport" />
            <span>
               Sport
            </span>
           </Link>
         </div>
        </Grid>
        <Grid item xs={8} >
         <div>
             
           { all &&
             <div className="category-product">
            <Grid container my={4}>
              {datas && datas?.data && Array.isArray(datas?.data) ? 
                datas?.data.map((item) => 
                <Grid item xs={6} sm={3} md={4}>
                 <Link to={`/lwg13-shop/${item._id}`}  className="category-item">
                  <img src={item.image} alt="product" />
                  <p>{item.title}</p>
                  <span className="price3">${item.price}</span>
                
                 </Link>
                </Grid>
              
              ): <p>loading..</p>}
              </Grid>
              <button className={page === 0 ? "pagButton none" : "pagButton"} onClick={() => setPage(page - 1)} >{page === 0 ? 0 : page - 1}</button>
              <button className="pagButton now">{page}</button>
               <button onClick={() => setPage(page + 1)} className={datas?.data.length !== 20 ? "pagButton none" : "pagButton"}>{page + 1}</button>
              <button onClick={() => setPage(page + 2)} className={datas?.data.length !== 20 ? "pagButton none" : "pagButton"}>{page + 2}</button>
            </div>
           }
           {display && <Outlet />}
           <br/><br/><br/><br/>
         </div>
        </Grid>
      </Grid>
    </div>
  )
}