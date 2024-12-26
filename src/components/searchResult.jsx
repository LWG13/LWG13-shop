import "./search.scss"
import { Grid } from "@mui/material"
export default function SearchResult() {
  const auth = useSelector(state => state.auth)
  return(
    <div className="searchResult">
      <br/>
      <br/><br/><br/><br/><br/><br/>
      {auth.searchResult.length === 0 ? (
       <h1>There is no product match your search</h1>
      ) : (
     <div className="product-box2" > 
      <h2>Found {auth.searchResult.length} product that match your search</h2>
      <br/>
       <Grid container my={4}> 
         {auth.searchResult.map((item) => 
           <Grid item xs={6} sm={4} md={4} lg={3}>
            <Link to={`/${item._id}`}  className="product-item2">
             <img src={item.image} alt="product" />
             <p>{item.title}</p>
             <span className="price2">${item.price}</span>
             <div className="product-category"><span>{item.category}</span></div>
            </Link>
           </Grid>
         )}
         </Grid>
     </div>   
      )}
    </div>
  )
}
