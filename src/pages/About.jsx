import "../styles/More.css";

import Header12 from "../components/Header12.jsx";
import More from "../components/More.jsx";
import Advertisement from "../components/Advertisement.jsx";
import Footer from "../components/Footer.jsx";
import Team from "../components/Team.jsx";


function About() {
    return (
       <div> <Header12/>
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