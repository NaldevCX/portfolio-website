import bootstrapIcon from '../../../img/tools-icons/bootstrap.png';
import cssIcon from '../../../img/tools-icons/css.png';
import htmlIcon from '../../../img/tools-icons/html.png';
import javaIcon from '../../../img/tools-icons/java.png';
import javaScriptIcon from '../../../img/tools-icons/javascript.png';
import phpIcon from '../../../img/tools-icons/php.png';
import reactjsIcon from '../../../img/tools-icons/reactjs.png';
import sqlIcon from '../../../img/tools-icons/sql.png';
import linuxIcon from '../../../img/tools-icons/linux.png';
import Aos from "aos";
import "aos/dist/aos.css";
import React, {useEffect} from "react";
const AboutMe = () =>{
  useEffect(() => {
    Aos.init({duration: 1000})
  }, []);
  return(
    <div className="about-container" id="about-me">
  <div className="about-card">

<div className="about-flex">
<div data-aos="fade-right" className=" about-content ">
<h1 className="a-f-col header-font-h">About Me</h1>


<p className="body-font-ml"> 
      I am an aspiring software engineer from the Philippines. In my free time, I often start pet projects while learning new languages and frameworks so I have a goal while I'm studying, this website being one of them.  
      <br/><br/>I started programming in 2016 back in my 4th year of highschool, I enjoyed solving problems and learning about new concepts that are entirely foreign to me.
      So I kept dabbling into different technologies and tools, made some basic Java Apps for my some student clients for their projects. Now we're here!
      
    </p>
</div>
<div data-aos="fade-left" className="right-about about-content ">
<h1 className="a-f-col header-font-h">My Skills</h1>


<p className="body-font-ml"> 
     
      
      Currently, I am familiar with these technologies , HTML, CSS, JS, PHP, MySQL, MSSQL, Java, Boostrap, ReactJS, and React-Boostrap.</p>


      <img className="icon-s" src={bootstrapIcon} alt="Icon"/>
      <img className="icon-s" src={cssIcon} alt="Icon"/>
      <img className="icon-s" src={htmlIcon} alt="Icon"/>
      <img className="icon-s" src={javaIcon} alt="Icon"/>
      <img className="icon-s" src={javaScriptIcon} alt="Icon"/>
      <img className="icon-s" src={phpIcon} alt="Icon"/>
      <img className="icon-s" src={reactjsIcon} alt="Icon"/>
      <img className="icon-s" src={sqlIcon} alt="Icon"/>
      <img className="icon-s" src={linuxIcon} alt="Icon"/>
      
      </div>


      </div>
      </div>
      </div>

    
  )

}

export default AboutMe