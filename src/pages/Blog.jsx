import "../styles/Blog.css"
import Header2 from "../components/Header2.jsx";
import BlogCard from "../components/BlogCard.jsx";
import Script from "../components/Script.jsx";
import Footer from "../components/Footer.jsx";
function Blog() {
    return (
        <div>
            <Header2 title="Blog" subtitle1="Home" subtitle2=" Blog"/>
            <BlogCard/>
            <Script/>
           <Footer/>
        </div>
    )
}
export default Blog