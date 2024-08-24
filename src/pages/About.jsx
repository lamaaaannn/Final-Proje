import "../styles/More.css";

import Header2 from "../components/Header2.jsx";
import More from "../components/More.jsx";
import Advertisement from "../components/Advertisement.jsx";
import Footer from "../components/Footer.jsx";
import Team from "../components/Team.jsx";


function About() {
    return (
       <div> <Header2 title="About Us" subtitle1="Home" subtitle2=" About Us"/>
        <div className="contain">
<More/>
<Advertisement/>
<Team/>
        </div>
        <Footer/>
        </div>
    );
}
export default About