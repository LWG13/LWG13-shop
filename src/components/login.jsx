import "./login.scss"
import { Link, useNavigate} from "react-router-dom"
import { FaUser, FaLock } from "react-icons/fa"
import { loginUser } from "./ReduxToolkit/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { Form, useForm} from "react-hook-form"
export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const { control } = useForm()
  const auth = useSelector((state) => state.auth)
  console.log(auth)
  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if(auth._id) { navigate("/lwg13-shop/")}
  },[auth._id, navigate])
  const dispatch = useDispatch()
  const handleSubmit = () => {
    dispatch(loginUser(user))
  }
  return (
    <div className="wrapper">
      <Form action ="" method="post" onSubmit={handleSubmit} control={control}>
       <h1>Login</h1> 
       <div className="input-box">
         <input type="email" placeholder="Email" required onChange={(e => setUser({...user, email: e.target.value}))}/>
         <FaUser className="icon"/>
       </div>
       <div className="input-box">
         <input type="password" placeholder="Password" required onChange={(e => setUser({...user, password: e.target.value}))}/>
         <FaLock className="icon"/>
       </div>
        {auth.loginStatus === "reject" ? (
       <span style={{color: "red"}}>{auth.loginError}</span>
      )  : null}
      <br/>
       <Link to="/lwg13-shop/email" className="Link">Forgot password?</Link>
       
       <button className="btn">Login</button>
      <div className="register-link">
       <p>Don't Have An Account?<Link to="/lwg13-shop/signup">.  Register</Link></p>
        <br/>
      </div>
     </Form>
    </div>
  )
}