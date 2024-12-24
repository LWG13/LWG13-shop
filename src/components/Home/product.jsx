
import "./product.scss"
import { useQuery } from "react-query"
import star from "../star.png"
import axios from "axios"
import {Grid} from "@mui/material"
import { Link } from "react-router-dom"
export default function Product() {
  const { data } = useQuery("products", () => axios.get("https://ecommerce-server-y5yv.onrender.com/product"))
  return(
    <div className="product-box2">
    <h2>Featured Products</h2>
    <Grid container my={4}>
      {data && data.data && Array.isArray(data.data) ? 
        data.data.map((item) => 
        <Grid item xs={6} sm={3} md={4}>
         <Link to={`/LWG13-shop/${item._id}`}  className="product-item2" key={item._id}>
          <img src={item.image} alt="product" />
          <p>{item.title}</p>
          <span className="price2">${item.price}</span>
          <div className="product-category"><span>{item.category}</span></div>
         </Link>
        </Grid>
      ): <p>loading..</p>}
      </Grid>
      <Link to="/LWG13-shop/category" className="linkMore"><div className="more"><button className="moreButton">Look More</button></div></Link>
    </div>
  )
}