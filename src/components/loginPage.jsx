import Login from "./login.jsx"
import "./loginPage.scss"
import { Link } from "react-router-dom"
import goback from "./goback.png"
export default function LoginPage() {
      return(
            <div className="loginPage" >
                  <div className="naviDetail1">
        <Link to="/" className="goback1">
        <img src={goback} alt="go back" />
        </Link>
      </div>
                  <Login />
            </div>
)
}
