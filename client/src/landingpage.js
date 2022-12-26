import React from "react";
import banner from "./banner.jpg"
import  "./landingpage.css";
import { useNavigate } from "react-router-dom" 


const LandingPage=()=>{
 const navigate=useNavigate();
    const gotopostview=()=>{
        navigate("/PostView")
    

    }
    return(
        <>
        <div className="landing-page">
            <img src={banner} alt="banner-img"></img>
            <h2>10x team </h2>
            <button onClick={gotopostview}>Enter</button>
           
            

        </div>
        </>
    )
}
export default LandingPage;
