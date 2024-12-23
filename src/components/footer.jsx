
import "./footer.scss"
import {Grid} from "@mui/material"
import logo from "./Logo.png"
import visa from "./visa.jpg"
import paypal from "./paypal.jpg"
import master from "./mastercard.jpg"
import applepay from "./applepay.jpg"
import facebook from "./facebook.jpg"
import instagram from "./instagram.png"
import x from "./x.png"
export default function Footer() {
  return(
    <div className="footer">
     <Grid container>
      <Grid item xs={6} sm={3} md={3}>
        <div className="footerItem">
         <img src={logo} alt="LWG" />
          <h2>LWG13 Shop</h2>
          <span className="card">
            <img src={paypal} alt="paypal" />
            <img src={applepay} alt="applepay" />
            <img src={master} alt="master" />
            <img src={visa} alt="visa" />
          </span>
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <div className="footerItem">
         <h2>Category</h2>
           <li>Clothing</li>
           <li>Food</li>
           <li>Pet Supplies</li>
           <li>Jewery</li>
           <li>Sport Tools</li>
           <li>Skin care</li>
           <li>Computer and mobile</li>
           <li>Electronics</li>
           <li>Applince</li>
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <div className="footerItem">
         <h2>Company</h2>
         <li>Private Policy</li>
         <li>Contact Us</li>
        </div>
      </Grid>
      <Grid item xs={6} sm={3} md={3}>
        <div className="footerItem">
          <h2>Contact Us</h2>
          <li>Email: hiodn@gmail.com</li>
          <li>Phone: 0293027732</li>
          <span className="card">
            <img src={facebook} alt="facebook" />
            <img src={x} alt="x" />
            <img src={instagram} alt="instagram" />
          </span>
        </div>
      </Grid>
     </Grid>

      <p>Copyright ©2025 by LWG13</p>
    </div>
  )
}