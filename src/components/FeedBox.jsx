import "../styles/FeedBox.css"
import feedback from "../feedback.json"

function FeedBox() {
    return (
        <div className="boks" >

        {feedback.map((e,index)=>(
        
     <div key={index} className="feedbox" style={{backgroundColor:e.color}}>
     <img src={e.image} alt="" />

    <div className="feedback-box-text">
        <h2>{e.title}</h2>
        <p> {e.description}</p>
        <span> {e.Text}</span>
</div>
<div className="feedback-stars">
    <img src={e.star} alt="" />
    <img src={e.star}  alt="" />
    <img src={e.star}  alt="" />
    <img src={e.star}  alt="" />
    <img src={e.star}  alt="" />
</div> 
    
    </div>
        ))}
    
    
       </div> )

}
export default FeedBox
