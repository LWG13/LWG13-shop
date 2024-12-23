
import "./banner.scss"
import Slider from "react-slick" 
import banner1 from "./banner1.jpg"
import banner2 from "./banner2.png"
import banner3 from "./banner3.jpg"
export default function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, 
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
  }
  return(
    <section className="banner">
      <div className="containerBanner">
       <Slider {...settings} className="sliderMain">
         <div className="itemBanner">
           <img src={banner1} alt="banner" className="w-100" width="100%" height= "300px" />
           <div className="info">
             <h2 className="display-2 mb-4">
               Don't miss amazing<br />
               deals on your favourite
             </h2>
             <p>Sign up for the daily newsletter</p>
            
             <div className="search">
       <input type="text" placeholder="Searching.." />
       <span>| Submit</span>
      </div>
        </div>

         </div>
         <div className="itemBanner">
           <img src={banner2} alt="banner" className="w-100" width="100%" height= "300px"/>
           <div className="info">
             <h2 className="display-2 mb-4">
               Sale 30%-60%!<br />
               more produce release!
             </h2>
             <p>Let's catch up for more</p>
           </div>
         </div>
         <div className="itemBanner">
                 <img src={banner3} alt="banner" className="w-100" width="100%" height= "300px"/>
           <div className="info">
             <h2 className="display-2 mb-4">
               Quality Produce<br />
               is waiting you!
             </h2>
             <p>Save up for your bussiness</p>
             <br/>
             <button>Go to Category</button>
           </div>
          </div>
       </Slider>
      </div>
    </section>
  )
}