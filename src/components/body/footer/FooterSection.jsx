import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { SocialIcon } from 'react-social-icons';


const FooterSection = () =>{
    useEffect(() => {
        Aos.init()
      }, []);
    return(
        <div className="footer">
            <div className="footer-container">
            <div className="footer-brand body-font-l"> Website Built by Carl Mercado</div>
                <div className="footer-list-social">
                
                <SocialIcon  data-aos-delay='200' data-aos="fade-right" data-aos-duration='200' className="icons" fgColor="#000000" bgColor="#ffffff" onClick={()=> window.open("https://www.facebook.com/thundyfr/", "_blank")}  network="facebook" />
                <SocialIcon  data-aos-delay='400'data-aos="fade-right" data-aos-duration='400' className="icons"fgColor="#000000" bgColor="#ffffff"  onClick={()=> window.open("https://github.com/Nallafy", "_blank")}   network="github" />
                <SocialIcon data-aos-delay='600'data-aos="fade-right" data-aos-duration='600' className="icons"fgColor="#000000" bgColor="#ffffff" onClick={()=> window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=carl.mercado1601@gmail.com", "_blank")} network="google"   />
                <SocialIcon data-aos-delay='800'data-aos="fade-right" data-aos-duration='800' className="icons"fgColor="#000000" bgColor="#ffffff" onClick={()=> window.open("https://t.me/nulzy", "_blank")}    network="telegram" />
                <SocialIcon   data-aos-delay='1000'data-aos="fade-right" data-aos-duration='1000' className="icons"fgColor="#000000" bgColor="#ffffff" onClick={()=> window.open("https://www.linkedin.com/in/carl-allan-patrick-mercado-2b6876245/", "_blank")}   network="linkedin" />
                </div>
            </div>
        </div>
    )    }

    export default FooterSection