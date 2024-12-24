import "./homeProfile.scss"
import { useSelector } from "react-redux"
import product from "../../product.png"
import post from "../../post.png"
import star from "./star.png"
import { useQuery } from "react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import {Grid } from "@mui/material"
export default function HomeProfile() {
  const auth = useSelector(state => state.auth)
   const userId = useParams()
  const userId1 = userId.profileId
  const { data } = useQuery(["user", userId1], () => axios.get(`https://ecommerce-server-y5yv.onrender.com/user/signup/${userId1}`))
  const { data: lastest } = useQuery("lastest", () => axios.get(`https://ecommerce-server-y5yv.onrender.com/product/lastest/${userId1}`))

  return(
    <div className="homeProfile">
      <div className="desc" >
       <h2>Description</h2>
       <p>{data?.data.desc}</p>
      </div>
      <hr style={{backgroundColor: "#BF77F6", width: "100%"}}/>
      
      <div className="product-box">
        <h2>Lastest Product</h2>
        {lastest?.data?.length === 0 ? (
      <div className="empty">
       <p>User don't have any product</p>
      </div>
    ) : (
      <Grid container spacing={1} >
        {lastest?.data?.map(product => 
      <Grid xs={6} sm={4} md={4} lg={3} >
       <Link to={`/LWG13-shop/${product._id}`} className="product-item" key={product.name} >
         <img src={product.image} />
         <p>{product.title}</p>
         <span className="price" >{product.price}$</span>
        <div className="product-category"><span>{product.category}</span></div>
        </Link>
      </Grid>
    )}
      </Grid>
      )}
      </div>
    </div>
  )
}