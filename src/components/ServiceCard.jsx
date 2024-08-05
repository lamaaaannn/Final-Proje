import "../styles/ServiceCard.css";
import serviceCard from "../serviceCard.json";
import { Link } from "react-router-dom";

function ServiceCard() {
  return (
    <div className="items">
      <div className="btnText">
        <h2>What We Provide</h2>
        <p>
          Praesent placerated egestas egestas cras rhone <br /> magna rutrum
          tellus laoreet
        </p>
      </div>
      <div className="container">
      {serviceCard.map((e, index) => (
        <div
          style={{ backgroundColor: e.color }}
          key={index}
          className="serviceBox"
        >
          <img src={e.icon} alt="" />

          <div>
            <h2>{e.title}</h2>
            <p>{e.description}</p>

            <Link to={e.path}>{e.buttonText}</Link>
          </div>
        </div>
      ))}
      </div>
      {" "}
      <br />
      <div className="btns">
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </div>
  );
}
export default ServiceCard;
