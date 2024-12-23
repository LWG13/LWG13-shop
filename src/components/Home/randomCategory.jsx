
import "./randomCategory.scss"
import Slider from "react-slick"
import cloth from "./cloth.png"
import jewery from "./jewery.png"
import food from "./food.png"
import pet from "./pet.png"
import skincare from "./skincare.png"

import computer from "./computer.png"
import garden from "./garden.png"
import sport from "./sport.png"
import housework from "./housework.png"

export default function RandomCategory() {
  var settings ={
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false, 
    arrows: true,
    autoplay: true,
    autoplayspeed: 7000
  }
   var settings1 ={
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false, 
    arrows: true,
    autoplay: true,
    autoplayspeed: 7000
   }
  return(
    <>
    <div className="catSlide">
     <div className="container-cat">
       <h2 className="hd">Featured Categories</h2>
       <Slider {...settings} className="catSliderMain">
         <div className="catItem" style={{backgroundColor: "red"}}>
            <img src={cloth} alt="cloth" />
            <p>Clothing</p>
         </div>
         <div className="catItem"style={{backgroundColor: "red"}}>
            <img src={food} alt="food" />
            <p>Food</p>
         </div>
         <div className="catItem" style={{backgroundColor: "#A868D9"}}>
            <img src={jewery} alt="cloth" />
            <p>Jewelery</p>
         </div>
         <div className="catItem"style={{backgroundColor: "blue"}}>
            <img src={computer} alt="electronics" />
            <p>Electronics</p>
         </div>
         <div className="catItem" style={{backgroundColor: "blue"}}>
            <img src={skincare} alt="skin care" />
            <p>Skin Care</p>
         </div>
         <div className="catItem" style={{backgroundColor: "leaf"}}>
            <img src={sport} alt="sport" />
            <p>Sport </p>
         </div>
         
         
       </Slider>
        
     </div>
       
    </div>

       <br/><br/><br/>
      <div className="catSlide1">
     <div className="container-cat1">
       <h2 className="hd1">Featured Categories</h2>
       <Slider {...settings1} className="catSliderMain1">
         <div className="catItem1" style={{backgroundColor: "red"}}>
            <img src={cloth} alt="cloth" />
            <p>Clothing</p>
         </div>
         <div className="catItem1"style={{backgroundColor: "red"}}>
            <img src={food} alt="food" />
            <p>Food</p>
         </div>
         
         <div className="catItem1" style={{backgroundColor: "#A868D9"}}>
            <img src={jewery} alt="cloth" />
            <p>Jewery</p>
         </div>
         <div className="catItem1" style={{backgroundColor: "blue"}}>
            <img src={computer} alt="computer" />
            <p>Computer and Phone</p>
         </div>
         
         <div className="catItem1" style={{backgroundColor: "blue"}}>
            <img src={skincare} alt="skin care" />
            <p>Skin Care</p>
         </div>
      
         <div className="catItem1" style={{backgroundColor: "leaf"}}>
            <img src={sport} alt="sport" />
            <p>Sport</p>
         </div>
         
       </Slider>
         
     </div>
    </div>
       <br/><br/><br/><br/>
   </>
  )
}