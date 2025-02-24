
import "./category.scss"
import {useParams, Link} from "react-router-dom"
import { useState } from "react"
import { useQuery } from "react-query"
import { Grid } from "@mui/material"
import axios from "axios"
import star from "../star.png"
export default function CategoryType() {
  const [page, setPage] = useState(0)
  const { category } = useParams()
  const { data: categoryData, isLoading, isError, error} = useQuery({ 
    queryKey: ["product", category],
    queryFn: () => axios.get(`https://ecommerce-server-y5yv.onrender.com/product/category/${category}?limit=${page}`)
  })
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return(
      <div className="category-product">
        <br/>
        <Grid container >
          
            {Array.isArray(categoryData?.data) && categoryData.data.length > 0 ? (
              categoryData.data.map((categoryItem) => (
        <Grid item xs={6} sm={4} md={4} lg={3}>
                <Link key={categoryItem._id} to={`/${categoryItem._id}`} className="category-item">
                  <img src={categoryItem?.image} alt="product" loading="lazy" />
                  <p>{categoryItem?.title}</p>
                  <span className="price3">${categoryItem?.price}</span>
                
                </Link>
        </Grid>
              ))
            ) : (
              <div>No products available</div>
            )}
          
        </Grid>
              <button className={page === 0 ? "pagButton none" : "pagButton"} onClick={() => setPage(page - 1)} >{page === 0 ? 0 : page - 1}</button>
              <button className="pagButton now">{page}</button>
              <button onClick={() => setPage(page + 1)} className={categoryData?.data.length !== 20 ? "pagButton none" : "pagButton"}>{page + 1}</button>
        </div>
  )
}
  


  


