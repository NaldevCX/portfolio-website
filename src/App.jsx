
import './index.css';


import NavigationBar from "./components/navigation/NavigationBar";
import IntroSelf from "./components/body/intro/IntroSelf";
import AboutMe from "./components/body/about-me/AboutMe";
import JobExperience from "./components/body/experience/JobExperience";
import FooterSection from './components/body/footer/FooterSection';


const App = () => {
return <div>
<NavigationBar/>
<IntroSelf/>
<AboutMe/>
<JobExperience/>
<FooterSection/>
</div>
};

export default App