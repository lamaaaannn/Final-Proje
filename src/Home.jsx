import logo from './logo.svg';
import "./Header.css"
import './App.css';
import Header from "./Header.jsx"
import Advertisement from "./Advertisement.jsx"
import LandingPages from "./LandingPages.jsx";
import Proje from "./Proje.jsx"
import DesignBoxs from "./DesignBoxs.jsx";
import User from "./User.jsx"
import Idea from "./Idea.jsx"
import Feedback from "./Feedback.jsx"
import Subscript from './Script.jsx';
import FeedBox from "./FeedBox.jsx"
import Script from "./Script.jsx"
import Footer from "./Footer.jsx"
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
 
