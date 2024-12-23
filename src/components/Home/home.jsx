
import "./home.scss"
import Banner from "./banner"
import RandomCategory from "./randomCategory"
import Product from "./product.jsx"
import Footer from "../footer.jsx"
export default function Home() {
  return (
   <div className="home">
    <Banner />
    <RandomCategory />
    <br/>
    <br/>
    <Product />
    <Footer />
   </div>
  )
}
