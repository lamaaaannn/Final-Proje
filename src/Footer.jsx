import "./Footer.css"
function Footer() {
    return (
    <div className="foot">
<div className="footer-top">
    <div className="foot-text">
    <img src="./images/Dev.svg" alt="" srcset="" />
    <span>DevAgency</span>
    </div>
    <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Portfolio</li>
        <li>Contact Me</li>
        <li>Privacy Policy</li>
    </ul>
</div>
<div className="footer-bottom">
    <div className="foot-left">
    Copyright @ Milton Debnath 2020, All rights reserved
    </div>
    <div className="foot-right">
        <img src="./images/facebook.png" alt="" />
        <img src="./images/twitter.png" alt="" />
        <img src="./images/ball.png" alt="" />
        <img src="./images/in.png" alt="" />
        <img src="./images/v.png" alt="" />
    </div>
</div>
    </div>);
}
export default Footer