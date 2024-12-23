
import "./contact.scss"
import { Grid } from "@mui/material"
import contact from "../../contact.png"
import address from "../../address.png"
import email from "../../email.png"
import Footer from "./footer.jsx"
import { useState } from "react"
import { useForm, Form } from "react-hook-form"
import axios from "axios"
export default function Contact() {
  const { register, control, formState: { errors, isSubmitting, isDirty } } = useForm();
   const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  })
  const handleSubmit = () => {
    axios.post("https://9995c89c-769d-4116-8be8-5fd12b7d8600-00-26fc6v86ibzf8.sisko.replit.dev/contact", {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      message: user.message
    })
    setUser({name: "", email: "", phoneNumber: "", message: ""})
  }
  console.log(user)
  return(
    <div className="contact">
      <div className="contactInfo">
      <p style={{color: "white", fontSize: "40px"}}> GET IN TOUCH</p>
       <Grid container>
        <Grid item xs={12} sm={4} md={4} >
         <div className="contactBox">
          <img src={email} alt="email" />
          <h2 >Email</h2>
          <ul>
          <h4>For contact</h4>  
    
            <li>LwgShop@gmail.com</li>
            
      <h4>For Support</h4>
          
          <li>supportLwgShop@gmail.com</li>
          </ul>
         </div>
        </Grid>
         <Grid item xs={12} sm={4} md={4} >
          <div className="contactBox">
           <img src={contact} alt="phone" />
           <h2>Phone</h2>
           <ul>
        <h4>For contact</h4>  
            
             <li>0895468946</li>
         <h4>For Support</h4>
          
           <li>0582985503</li>
           </ul>
          </div>
         </Grid>
         <Grid item xs={12} sm={4} md={4} >
          <div className="contactBox">
            <img src={address} alt="phone" />
           <h2>Address</h2>
           <ul>
             <li>364 Bach Dang, district 21, Binh Thanh, TPHCM</li>
           </ul>
          </div>
         </Grid>
       </Grid>
      </div>
      <div className="contactForm">
       <Grid container spacing={2}>
       <Grid item xs={12} sm={6} md={6} lg={6}>
        <h1 style={{fontSize: "40px"}}>CONTACT US</h1>
        <p>Contact us for advertise or having interested in cooperate with us, so if you wanna support or cooperate, please contact us, hope you don't mind if we not response earlier!</p>
       </Grid>
       <Grid item xs={12} sm={6} md={6} lg={6} >
        <Form action="" method="post" control={control} onSubmit={handleSubmit}>
          <label>Name</label>
          <div className="input-box1">
         <input type="text" placeholder="Username" value={user.name} {...register("username", { required: {value: true, message: "Username is required" }})} onChange={(e => setUser({...user, name: e.target.value}))} />
       </div>
        <span className="error1">{errors.username?.message}</span>
       <label>Email</label>
       <div className="input-box1">
         <input type="email" placeholder="Email" required  value={user.email} {...register("email", { required: {value: true, message: "Email is required"}, pattern: {
       value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 
       message: "invalid email format!"
    }})} onChange={(e => setUser({...user, email: e.target.value}))}/>
       </div>
        <span className="error1">{errors.email?.message}</span>
          <label>Phone Number</label>
          <div className="input-box1">
             <input type="tel" placeholder="Phone number" value={user.phoneNumber} required {...register("number", { minLength:{value:10, message: "phone number should be 10 digit"}, pattern: {
          value: /^[0-9]+$/,
          message: "invalid phone number format!"
             }, required: {value: true, message: "Phone number is required" }})} onChange={(e => setUser({...user, phoneNumber: e.target.value}))}/>
           </div>
           <span className="error1" >{errors.number?.message} </span>
          <label>Message</label>
         <textarea placeholder="message" {...register("message1", {required: {value: true, message: "Message is required" }})} onChange={(e => setUser({...user, message: e.target.value}))} value={user.message} />
         <span className="error1" >{errors.message1?.message}</span>
         <button className="btn" disabled={!isDirty || isSubmitting }>Submit</button>
        </Form>
       </Grid>
       </Grid>
      </div>
      <Footer />
    </div>
  )
}