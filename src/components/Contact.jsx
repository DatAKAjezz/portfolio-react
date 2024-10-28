import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../CSS/Contact.css'

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
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send message:', err);
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div className='contact-container'>
        <div className = "left-contact" style={{paddingLeft: '5%'}}>
        
            <h3>Contact Me via:</h3>
        
        </div>
        <div className= "right-contact">
            <form onSubmit={handleSubmit} className="contact-form">
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label>Message:</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">Send</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
