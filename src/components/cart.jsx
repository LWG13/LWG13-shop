
import goback from "./goback.png"
import "./cart.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useQuery } from "react-query"
import star from "./star.png"
import axios from "axios"
import Footer from "./footer.jsx"
import {Grid} from "@mui/material"
import { removeFromCart, decreaseCart, addToCart, clearCart, getTotals} from "./ReduxToolkit/cartSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
export default function Cart() {
  const { data : datas } = useQuery("products", () => axios.get("https://ecommerce-server-y5yv.onrender.com/product"))
  const cart = useSelector((state) => state.cart)
  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getTotals(cart))
  },[cart])
  const clear = (cart) => {
    dispatch(clearCart(cart))
  }
  const decrease = (cart) => {
    dispatch(decreaseCart(cart))
  }
  const increase = (cart) => {
    dispatch(addToCart(cart))
  }
  const dispatch = useDispatch()
  const removeProduct = (cart) => {
    dispatch(removeFromCart(cart))
  }
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
        
        <h2>Shopping Cart</h2>
        
          {cart.cartItem.length === 0 ? (
      <div className="empty">
       <p>Your cart is currently empty</p>
       <Link to="/" className="start-shopping">Start Shopping</Link>
      </div>
          ) : (
            <div className="cart-items">
              {cart.cartItem.map(cart => (
             
             <div className="cart-item" key={cart.title}>
              
              <div className="cart-product">
                <img src={cart.image} alt="product" />
                <div style={{paddingLeft: 10}}>
                  <h2 className="name">{cart.title}</h2>
                  <p>
                    ${cart.price * cart.cartQuantity}
                  </p>
                </div>
              </div>
              <div className="cart-pad">
                
                <div className="count">
          <button onClick={() => decrease(cart)}>-</button>
          <span className="number">{cart.cartQuantity}</span>
          <button onClick={() => increase(cart)}>+</button>
                </div>
           <button className="buttonremove" onClick={() => removeProduct(cart)}>Remove</button>   
                
         </div>
            
             </div>
              ))}
                           <div className="cart-summary">
               <button className="clear-cart" onClick={() => clear()}>Clear  Cart</button>
                <div className="cart-checkbox">
                 <div className="subtotal">
                 <span>Subtotal: </span>
                 <span className="amount">$ {cart.cartTotalAmount}</span>
                </div>
               <p>Taxes and shipping calculated</p>
               <button>{auth.userLoaded ? "Check Out" : "login to check out"}</button>
               <div className="continue">
                
                <Link to="/LWG13-shop/"><span>Continue Shopping</span></Link>
               </div>
                </div>
              </div>
            </div>
                         
          
        )}
    </div>
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
      </div>
      </div>
  )
}


