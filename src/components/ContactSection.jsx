import mail from '../assets/mail.png'
import call from '../assets/call.png'
import { useState } from 'react';
import { inputHandle } from '../utils/formHandler'
import { handleSubmit } from '../handlers/userHandlers'

function ContactSection() {
  const [userData, setUserData] = useState({
    fname: '',
    email: '',
    subject: '',
    msg: ''
  })

  const [error, setError] = useState({
    fname: '',
    email: '',
    subject: '',
    msg: ''
  })

  const handleChange = (e) => {
    inputHandle({ e, setUserData, setError })

  }


  return (
    <div className="contact-section section-box" id="contact-page">
      <h1 className="section-heading">Get In Touch</h1>
      <div className="contact-wrapper">
        <div className="contact-info-block">
          <h2 className="contact-heading">Let's Talk</h2>
          <p className="contact-description">
            Passionate about frontend development and building user-friendly digital experiences. Currently open to exciting roles — available to join immediately
          </p>

          <div className="contact-detail">
            <div className="contact-item">
              <p className="contact-info">
                <img src={mail} alt="mail" className="contact-icon" />
                prathammirashi48@gmail.com
              </p>
            </div>
            <div className="contact-item">
              <p className="contact-info">
                <img src={call} alt="not" className="contact-icon" />
                7406588607
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => handleSubmit({ e, userData, setError, setUserData })}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" name="email" className="form-input" placeholder="Enter your name" value={userData.email} onChange={handleChange} />
            {error.email && (<p>{error.email}</p>)}
          </div>

          <div className="form-group">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" name="subject" className="form-input" placeholder="Enter Subject" value={userData.subject} onChange={handleChange} />
            {error.subject && (<p>{error.subject}</p>)}
          </div>

          <div className="form-group">
            <label htmlFor="fname" className="form-label">Name</label>
            <input type="text" name="fname" className="form-input" placeholder="Enter your name" value={userData.fname} onChange={handleChange} />
            {error.fname && (<p>{error.fname}</p>)}
          </div>

          <div className="form-group">
            <label htmlFor="msg" className="form-label">Message</label>
            <textarea name="msg" className="form-textarea form-input" rows={8} placeholder="Enter your message" value={userData.msg} onChange={handleChange}></textarea>
            {error.msg && (<p>{error.msg}</p>)}
          </div>

          <div>
            <button className="contact-submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;
