import "../styles/Contacts.css"
<link
href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
rel="stylesheet"
/>
function Contacts() {
    return (
        <div className="contain">

<div className="boxs">
    <div>
<img src="./images/gps.png" alt="" />
</div>
    <div className="texts">
        <h2>E-mail Us At</h2>
        <span>design@gmail.com</span>
        <span>example@gmail.com</span>
    </div>
</div>

<div className="boxs">
    <div>
<img src="./images/phone.png" alt="" />
</div>
    <div className="texts">
        <h2>Direct Call Us On</h2>
        <span>(224) 4466-7788</span>
        <span>(224) 4466-7788</span>
    </div>
</div>
<div className="boxs">
    <div>
<img src="./images/poct.png" alt="" />
</div>
    <div className="texts">
        <h2>E-mail Us At</h2>
        <span>design@gmail.com</span>
        <span>example@gmail.com</span>
    </div>
</div>
        </div>
    );
}
export default Contacts