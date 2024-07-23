import "./DesignBoxs.css"
import manifest from "../src/manifest.json"
function DesignBoxs() {
   return (
   <div className="boxs">
    {manifest.map((e,index)=>(
 <div style={{backgroundColor:e.color}} key={index} className="designbox">

<img src={e.icon} alt="" />

<div>
<h2>{e.title}</h2>
<p>{e.description}</p>
<a href="#">{e.buttonText}</a>
</div>
</div>
    ))}


   </div> 
   )
}
export default DesignBoxs