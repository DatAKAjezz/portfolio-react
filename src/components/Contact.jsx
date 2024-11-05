import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css'
import { easeIn, easeInOut, motion } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_2m13k58',
      'template_1oo6gys',   
      formData,
      'yIDjG3dEiU-ztXmd1'           
    )
    .then((res) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div id = 'contact-section'>
        <div className='contact-wrapper'>
            <div className='contact-title-container'>
                <div className='borders'></div>
                <div className='contact-title'>contact</div>
                <div className='borders'></div>
            </div>  

            <div className='contact-container'>
                <motion.div 
                  whileInView={{x: [-400, 0]}}
                  transition={{duration: 0.5}}     
                  viewport={{once: true}}             
                  className = "left-contact" style={{paddingLeft: '5%'}}>
                    <div>Contact Me via</div>
                    <div className='contact-icon-container'>
                        <div><img src = 'facebook.png'></img></div>
                        <div><img src = 'gmail.png'></img></div>
                    </div>
                
                </motion.div>
                <motion.div  
                    whileInView={{x: [400, 0]}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className= "right-contact">
                    <h3>Send a form if you interested in collaboration!</h3>
                    <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send</button>
                    </form>
                </motion.div>
            </div>
        </div>
        <div className='sayonara'>
            Thanks for scrolling ! ( On developing )
        </div>
    </div>
  );
};

export default Contact;
