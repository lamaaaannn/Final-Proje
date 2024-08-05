import "../styles/ProjeCards.css"
import ProjeCard from "../projeCard.json"

function ProjeCards() {
    return (
    <div className="items">
<div className="btnText">
        <h2>Our Projects</h2>
        <p>Praesent placerated egestas egestas cras rhone <br /> magna rutrum tellus laoreet</p>
        </div>
        <div className="container">
{ProjeCard.map((e,index)=>(

<div style={{backgroundColor:e.color}} className="item1">
    <h1>{e.title}</h1>
 <img src={e.image} alt="" srcset="" />
</div>

    ))}
    </div>
     <br />
<div className="btns">
    <button>1</button>
    <button>2</button>
    <button>Next</button>
</div>

    </div>
    )
}
export default ProjeCards