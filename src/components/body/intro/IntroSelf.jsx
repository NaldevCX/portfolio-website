

import facePic from '../../../img/face.jpg';
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const IntroSelf = () =>{
  useEffect(() => {
    Aos.init()
  }, []);
  return(

    <section data-aos="fade" data-aos-delay='600' data-aos-duration='1000' className="desc-container">
      <div className="desc-card">
        <div className="desc-flex">
        <div className="desc-content">
           <p data-aos="fade-in" data-aos-delay='600' data-aos-duration='1200' className="d-f-col intro-widelvl-font">
              <br/><h1  className='header-font-h'>Hello there! My name is Carl Mercado.</h1> </p>
              
             <br/>  <div className="body-font-ml">I'm currently a 4th year student at iACADEMY waiting for graduation. I like tech, I like learning about new tech, I like discovering new tech.
              <br/><br/>I currently work on personal projects like this website while learning new tools to add to my skillset. </div>
               
               </div>
               <img data-aos="fade-in" data-aos-delay='600' data-aos-duration='1400' className="face-pic d-f-col" src={facePic} alt="Face"/>
        </div>
      </div>
    </section>
  )
}

export default IntroSelf