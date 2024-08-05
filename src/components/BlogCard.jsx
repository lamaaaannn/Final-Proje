import "../styles/BlogCard.css"
import Blogcards from "../blogcards.json"
function BlogCard() {
    return (
        <div >
            <div className="btnText">
        <h2>Our Projects</h2>
        <p>Praesent placerated egestas egestas cras rhone <br /> magna rutrum tellus laoreet</p>
        </div>
        <div className="contain">
        {Blogcards.map((e,index)=>(

<div style={{backgroundColor:e.color}} className="obj1">
 <img src={e.image} alt="" srcset="" />
 <button>{e.button}</button>
 <h2>{e.title}</h2>
 <span>{e.date}</span>
</div>

    ))} 
    </div><br />
<div className="btns">
    <button>1</button>
    <button>2</button>
    <button>Next</button>
</div>

    </div>
    )


     
    
}
export default BlogCard