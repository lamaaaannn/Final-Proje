import "../styles/ProjeCards.css"
import ProjeCard from "../projeCard.json"
import { Link } from 'react-router-dom';

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
    <Link to={e.path}> <img src={e.image} alt="" srcset="" /></Link>
 
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