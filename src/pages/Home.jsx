import "../styles/Header.css"
import '../App.css';
import Header from "../components/Header1.jsx";
import Advertisement from "../components/Advertisement.jsx"
import LandingPages from "../components/LandingPages.jsx";
import Proje from "../components/Proje.jsx"
import DesignBoxs from "../components/DesignBoxs.jsx";
import User from "../components/User.jsx"
import Idea from "../components/Idea.jsx"
import Feedback from "../components/Feedback.jsx"

import FeedBox from "../components/FeedBox.jsx"
import Script from "../components/Script.jsx"
import Footer from "../components/Footer.jsx"
function Home() {
  return (
    <div className="App">
   
    <Header/>
  
    <div className="home">
    <Advertisement/>
    <Proje/>
    <LandingPages/>
    <DesignBoxs/>
    <User/>
    <Idea/>
    <Feedback/>
    <FeedBox/>
    <Script/>
   
   
    </div>
    <Footer/>
 </div>
  );
}

export default Home;
 
