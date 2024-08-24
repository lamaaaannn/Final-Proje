import "../styles/Projects.css";
import Header2 from "../components/Header2.jsx";
import ProjeCards from "../components/ProjeCards.jsx";
import Script from "../components/Script.jsx";
import Footer from "../components/Footer.jsx";

function Projects() {
  return (
    <div>
      <Header2 title="Projects" subtitle1="Home" subtitle2="Projects" />
      <ProjeCards />
      <Script />
      <Footer />
    </div>
  );
}
export default Projects;
