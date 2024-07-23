import "./ServiceCard.css"
import serviceCard from "../src/serviceCard.json"

function ServiceCard() {
    return (
    <div className="items">
<div className="btnText">
        <h2>What We Provide</h2>
        <p>Praesent placerated egestas egestas cras rhone <br /> magna rutrum tellus laoreet</p>
        </div>
{serviceCard.map((e,index)=>(
 <div style={{backgroundColor:e.color}} key={index} className="serviceBox">

<img src={e.icon} alt="" />

<div>
<h2>{e.title}</h2>
<p>{e.description}</p>
<a href="#">{e.buttonText}</a>
</div>
</div>
    ))}
<div className="btns">
    <button>1</button>
    <button>2</button>
    <button>Next</button>
</div>

    </div>
    )
}
export default ServiceCard