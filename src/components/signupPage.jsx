import Signup from "./signup.jsx"
import "./signupPage.scss"
import { Link } from "react-router-dom"
import goback from "./goback.png"
export default function SignupPage() {
      return(
            <div className="signupPage" >
                  <div className="naviDetail1">
        <Link to="/lwg13-shop/" className="goback1">
        <img src={goback} alt="go back" />
        </Link>
      </div>
                  <Signup />
            </div>
)
}