
import Header2 from "../components/Header2.jsx";
import Contacts from "../components/Contacts.jsx";
import Message from "../components/Message.jsx";
import Footer from "../components/Footer.jsx";
function Contact() {
    return (
        <div>
           <Header2 title="Contact" subtitle1="Home" subtitle2=" Contact"/>
           <Contacts/>
           <Message/>
           <Footer/>
        </div>
    );
}
export default Contact