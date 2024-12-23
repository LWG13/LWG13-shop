
import { useLocation, Link } from "react-router-dom"
import "./crumb.scss"
export default function Crumb() {
  const location = useLocation()
  let currentLink =""
  const crumb = location.pathname.split("/").filter(crumbs => crumbs !== "").map(crumbs => {
    currentLink += `/${crumbs}`
    return(
      <div className="crumb" key={crumbs} >
       <Link to={currentLink}>{crumbs}</Link>
      </div>
    )
  })
  return(
    <div className="breadcrumb">
      {crumb}
    </div>
  )
}