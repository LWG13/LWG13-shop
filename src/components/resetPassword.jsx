import "./login.scss"
import { Link, useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { Form, useForm} from "react-hook-form"
import goback from "./goback.png"
import { resetPassword } from "./ReduxToolkit/authSlice"
export default function ResetPassword() {
  const { control, register, formState: { errors } } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.auth)
  const [password, setPassword] = useState("")
  const user = {
    email: auth.emailReset,
    password: password
  }
  const handleSubmit = () => {
    dispatch(resetPassword(user))
  }
  useEffect(() => {
    if(auth.successReset === true) navigate("/LWG13-shop/login")
  }, [auth.successReset, navigate])
  return(
    <div className="loginPage" >
                  <div className="naviDetail1">
        <Link to="/LWG13-shop/login" className="goback1">
        <img src={goback} alt="go back" />
        </Link>
      </div>
                 <div className="wrapper">
      <Form action ="" method="post" onSubmit={handleSubmit} control={control}>
       <h1>Resetting Password</h1> 
       <div className="input-box">
         <input type="password" placeholder="Type new password..." required {...register("password", { required: {value: true, message: "Password is required"}, minLength: { value: 6 , 
       message: "Password is not lower than 6 character!"
    }})} onChange={(e => setPassword(e.target.value))}/>
        
       </div>
        <span className="error">{errors?.password?.message}</span>
        {auth.registerStatus === "reject" ? (<p style={{color: "red"}}>{auth.error}</p>) : null}
       <button className="btn">Confirm</button>
      </Form>
                 </div>
            </div>
  )
}