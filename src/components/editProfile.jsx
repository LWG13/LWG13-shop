import "./profile.scss"
import { useSelector, useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import shopping from "./shopping.png"
import goback from "./goback.png"
import Footer from "./footer.jsx"
import { useNavigate } from "react-router-dom"
import { Grid } from "@mui/material"
import { editProfile } from "./ReduxToolkit/authSlice"
import { useState, useEffect } from "react"
export default function EditProfile() {
  const [file, setFile] = useState("") 
   const auth = useSelector(state => state.auth) 
  const [username, setUsername] = useState(auth.username)
  console.log(username)
  const [desc, setDesc] = useState(auth.desc)
  const [email, setEmail] = useState(auth.email)
  console.log(username)
  const [password, setPassword] = useState(auth.password)
  const [phoneNumber, setPhoneNumber] = useState(auth.phoneNumber)
  console.log(desc)
   const [image, setImage] = useState(auth.image)
  const user = {
    username: username,
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    image: image,
    desc: desc,
    _id: auth._id,
  }
  console.log(auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
   if(auth.editedProfile) navigate(`/lwg13-shop/profile/${auth._id}`)
  },[navigate, auth.editedProfile])
  const previewFile= (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImage(reader.result)
      console.log(image)
    }
  }
  const handleSubmit = () => {
    dispatch(editProfile(user))
   
  }
  const handleChange = (e) => {
    const file = e.target.files[0]
    setFile(file)
    previewFile(file)
  }
  return (
     <div className="profile">
    <div className="grid">
    
  <div className="naviDetail">
    <Link to={`/lwg13-shop/profile/${auth._id}`} >
     <img src={goback} alt="go back" width="90px" />
    </Link>
     </div>
    </div>

    <div className="gridO">
      <div className="gridDetail">
      <div className="profileBox1">
      <div className="profileInfo1">
      <h1>Edit Account</h1>
      <Grid container >
       <Grid item xs={12} sm={4} md={4} lg={4} >
       <div className="profileImg">
        <img src={image} alt="avatar"/>
          <div className="file-upload">
            <h3>Click box to upload</h3>

          <input type="file" onChange={(e) => handleChange(e)} />
          </div>
       </div>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={8} >
      <label>Name</label>
      <input type="text" defaultValue={auth.username} onChange={(e => setUsername(e.target.value))} />
      <label>Description</label>
      <textarea defaultValue={auth.desc} onChange={(e => setDesc(e.target.value))} />
        <label>Email</label>
        <input type="email" defaultValue={auth.email} onChange={(e => setEmail(e.target.value))} />
        <label>Password</label>
        <input type="password" defaultValue={auth.password} onChange={(e => setPassword(e.target.value))} />
        <label>Phone Number</label>
        <input type="tel" defaultValue={auth.phoneNumber} onChange={(e => setPhoneNumber(e.target.value))} />
        
        <button onClick={handleSubmit} className="btn-submit1">Save</button>
      </Grid>
      </Grid>
      </div>
      </div>
      </div>
    </div>
     </div>

  )
}