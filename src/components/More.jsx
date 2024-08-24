import "../styles/More.css";
function More() {
  return (
    <div className="more">
      <div className="pcts">
        <img src="./images/more3.png" alt="" />  
        <img src="./images/more.png" alt="" />
        <img src="./images/more2.png" alt="" />
      
      </div>

      <div className="know">
        <h2>Know More About - Dev Agency & Their Process</h2>
        <span>
          Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque
          ipsum arcu, vehicula sit amet tempor non, blandite proin dignissim
          vitae ipsum a laoreet. In molestie imperdiet vehicula urna. Ut
          ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit
          eget urna aliquet.
        </span>
        <div className="statistic">
          <div >
            <h2>224k+</h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2>42k+</h2>
            <p>Projects Done</p>
          </div>
          <div>
            <h2>360D+</h2>
            <p>Days Of Work</p>
          </div>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  );
}
export default More;
