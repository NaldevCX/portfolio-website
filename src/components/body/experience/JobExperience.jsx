import pgPage from '../../../img/pg-page.png';
import jncPage from '../../../img/jnc.png';
import mob1Page from '../../../img/ExpenseTrack1.png';
import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const JobExperience = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
      }, []);
    return(

        <div className="experience-container" id="experience">
        <h1 className="j-mid-header header-font-h">My Experiences</h1>
        <div className="experience-card intro-widelvl-font">
        <div data-aos="fade-up"  className="experience-flex">
        
        <div className=" experience-content ">
        <h1 className="j-left-header header-font-h">Server and Community Manager (pinoygamer.ph, 2020-2021)</h1>

     



<p className="body-font-ml" > 
Managed and developed a production server
running a game network that included
monitoring, testing, maintenance,
troubleshooting, security, and community
management for pinoygamer.ph.
  

    </p>
</div>

<div className=" experience-content ">
<img className="icon-m" src={pgPage} alt="pinoygamer facebook page"/>
</div>


        </div>

<div data-aos="fade-up" className="experience-flex">
        
<div className=" experience-content ">
<h1 className="j-right-header header-font-h">J&C PC Online Ecommerce Concept (Thesis, 2020-2021)</h1>

     



<p className="body-font-ml"> 
Worked on mockups and front-end concepts for a baby thesis project with a client. Mainly used Bootstrap, Django, Javascript, HTML, and CSS.
  

    </p>
</div>

<div className=" experience-content ">
<img className="icon-m" src={jncPage} alt="pinoygamer facebook page"/>
</div>


</div>


<div data-aos="fade-up" className="experience-flex">
        
<div className=" experience-content ">
<h1 className="j-left-header header-font-h">Expense Tracker (School, 2020-2021)</h1>

     



<p className="body-font-ml" > 
I was tasked to make an Android app using Kotlin, I mainly used resources from my professor and tutorials online.
Technologies and tools used were Kotlin, Firebase, and Android Studio.<br></br><br></br>



    </p>
</div>

<div className=" experience-content ">
<img className="icon-m" src={mob1Page} alt="pinoygamer facebook page"/>
</div>


</div>


        </div>
        </div>

    )
}

export default JobExperience