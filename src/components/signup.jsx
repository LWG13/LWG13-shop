import "./signup.scss"
import { Link, useParams ,useNavigate } from "react-router-dom"
import { useQuery } from "react-query"
import axios from "axios"
import { useForm, Form } from "react-hook-form"
import { registerUser } from "./ReduxToolkit/authSlice"
import { useDispatch, useSelector} from "react-redux"
import {useRef, useState, useEffect} from "react"
export default function Signup() {
    const { register, control, formState: { errors, isSubmitting, isDirty } } = useForm();
  
  const navigate = useNavigate()
    const inputRef= useRef()
  const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    console.log(auth)
  useEffect(() => {
    if(auth._id) navigate("/lwg13-shop/")
  },[auth._id, navigate])

  
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",

  })
console.log(user)
  const handleSubmit = (e) => {

    dispatch(registerUser(user))
  }
  return (
    <div className="wrapper1">
      <Form action="" method="post" control={control} onSubmit={handleSubmit}>
       <h1>Sign Up</h1> 
       <div className="input-box">
         <input type="text" placeholder="Username"  {...register("username", { required: {value: true, message: "Username is required" }})} onChange={(e => setUser({...user, username: e.target.value}))} />
       </div>
        <span className="error">{errors.username?.message}</span>
       <div className="input-box">
         <input type="email" placeholder="Email" required  {...register("email", { required: {value: true, message: "Email is required"}, pattern: {
       value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 
       message: "invalid email format!"
    }})} onChange={(e => setUser({...user, email: e.target.value}))}/>
       </div>
        <span className="error">{errors.email?.message}</span>
        <div className="input-box">
         <input type="password" placeholder="Password" required {...register("password", { minLength:{ value: 6, message: "password cannot lower than 6 character" },  required: {
      value: true,
      message: "password is required"
         }, })}  onChange={(e => setUser({...user, password: e.target.value}))} />
        </div>
          <span className="error">{errors.password?.message}</span>
       
       <div className="input-box">
         <input type="tel" placeholder="Phone number" required {...register("number", { minLength:{value:10, message: "phone number should be 10 digit"}, pattern: {
      value: /^[0-9]+$/,
      message: "invalid phone number format!"
         }, required: {value: true, message: "Phone number is required" }})} onChange={(e => setUser({...user, phoneNumber: e.target.value}))}/>
       </div>
       <span className="error" >{errors.number?.message} </span>
        {auth.registerStatus === "reject" ? (
       <span style={{color: "red"}}>{auth.registerError}</span>
      )  : null}
       <button className="btn" disabled={!isDirty || isSubmitting }>Sign Up</button>
      <div className="register-link">
       <p>Already Have Account?<Link to="/lwg13-shop/login">.  Log In</Link></p>
        <br/>
      </div>
     </Form>
    </div>
  )
}