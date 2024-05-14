import '../sass/contact.sass'

const Contact = () => {

    return (
      <>
        <div className='contact-hero'>
        <h2>Question ? <br/> Leave us a message</h2>
        </div>
          <div className='contact-container'>
            <h3 className='contact-form-title'><span>Contact Form</span></h3>
            <form className="contact-form" id="contact-form">
              <input type="text" name="email" placeholder="Email" required/>
              <input type="text" name="name" placeholder="Username" required/>
              <input type="text" name="subject" placeholder="Subject" required/>
              <textarea
                id="contact-message" 
                name="contact-message" 
                placeholder="Your message" 
                required
                maxLength="250"
                form="contact-form"
                // value={message}
                // onChange={(e) => setComment(e.target.value)}
                >
                </textarea>
              <button type='submit'>contact</button>
            </form>
          </div>
      </>
    )
  };
  
  export default Contact;