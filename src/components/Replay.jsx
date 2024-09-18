import "../styles/Message.css"

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