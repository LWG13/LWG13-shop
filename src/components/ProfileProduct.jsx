
import { useSelector } from "react-redux"
import product from "../../product.png"
import post from "../../post.png"
import star from "./star.png"
import { useQuery } from "react-query"
import "./Home/product.scss"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import {Grid } from "@mui/material"
import {Link} from "react-router-dom"
export default function ProfileProduct() {
  const [page, setPage] = useState(0)
   const userId = useParams()
  const userId1 = userId.profileId
  const { data } = useQuery("yourProduct", () => axios.get(`https://ecommerce-server-y5yv.onrender.com/product/userProduct/${userId1}?limit=${page}`))
  const auth = useSelector(state => state.auth)
  console.log(data)
  return(
    <div className="product-box">
        <h2>User Product </h2>
      {data?.data.length === 0 ? (
      <div className="empty">
       <p>User don't have any product</p>
      </div>
      ) : (
     <div>
      <Grid container spacing={1} >
        {data?.data.map(product => 
      <Grid xs={6} sm={4} md={4} lg={3} >
       <Link to={`/${product._id}`} className="product-item" key={product.name} >
         <img src={product.image} />
         <p>{product.title}</p>
         <span className="price" >{product.price}$</span>
        <div className="product-category"><span>{product.category}</span></div>
        </Link>
      </Grid>
    )}
      </Grid>
       <button className={page === 0 ? "pagButton none" : "pagButton"} onClick={() => setPage(page - 1)} >{page === 0 ? 0 : page - 1}</button>
        <button className="pagButton now">{page}</button>
         <button onClick={() => setPage(page + 1)} className={data?.data.length !== 20 ? "pagButton none" : "pagButton"}>{page + 1}</button>
        <button onClick={() => setPage(page + 2)} className={data?.data.length !== 20 ? "pagButton none" : "pagButton"}>{page + 2}</button>
      </div>
      )}
     
      </div>

)
}
