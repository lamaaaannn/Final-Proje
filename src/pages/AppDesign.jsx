import Header2 from "../components/Header2.jsx";
import AppText from "../components/AppText.jsx";
import Footer from "../components/Footer.jsx";
import matchers from "@testing-library/jest-dom/matchers.js";
import AppExperience from "../components/AppExperience.jsx";

function AppDesign() {
  return (
    <div>
      <Header2  title="App Design" subtitle1="Home" subtitle2="Services > App Design"/>
      <AppText />
      <AppExperience />
      <Footer />
    </div>
  );
}
export default AppDesign;
