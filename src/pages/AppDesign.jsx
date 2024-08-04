import Header3 from "../components/Header3.jsx";
import AppText from "../components/AppText.jsx";
import Footer from "../components/Footer.jsx";
import matchers from "@testing-library/jest-dom/matchers.js";
import AppExperience from "../components/AppExperience.jsx";

function AppDesign() {
  return (
    <div>
      <Header3 />
      <AppText />
      <AppExperience />
      <Footer />
    </div>
  );
}
export default AppDesign;
