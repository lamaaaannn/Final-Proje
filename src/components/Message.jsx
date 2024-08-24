import "../styles/Message.css"
{/* <link
href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
rel="stylesheet"
/> */}
function Message() {
    return (
        <div className="message">
            <h2>Message Us</h2>
            <span>Nulla volutpat enim lorem, non volutpat tortor consequat ac.</span>

            <form action="">
                <div className="inpts">
                <input type="text" placeholder="Your Name"/>
                <input type="text" placeholder="Your Email" /> 
                </div>
                <textarea name="" id="" cols="30" rows="10"  placeholder="Your Message" ></textarea>
             <button>SEND MESSAGE</button>
            </form>

            {/* <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.153003487601!2d49.66517781020658!3d40.604447771290715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403096ca6ad02cf1%3A0x1339d22c8acb389f!2sIdrak%20Lyceum!5e0!3m2!1sru!2saz!4v1715532076903!5m2!1sru!2saz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

            <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7575884947835!2d49.82829981518093!3d40.38315737936856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40306338e7ec8a47%3A0x36b28c2f1b2d5368!2sCoders%20Azerbaijan!5e0!3m2!1str!2s!4v1692861027744!5m2!1str!2s"
          width="100%"
          height="300vh"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Coders Azerbaijan"
        ></iframe>
        </div>

    );
}

export default Message
