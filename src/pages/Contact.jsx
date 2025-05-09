import React, { useState } from 'react';
import './Contact.scss';
// Import icons for social media links
import { FaGithub, FaLinkedin, FaTwitter, FaFileAlt } from 'react-icons/fa';
// Import react-hook-form and Web3Forms
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const Contact = () => {
  // Replace useState with react-hook-form
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  // Web3Forms configuration with your API key
  const { submit } = useWeb3Forms({
    access_key: '91e04378-146f-4d68-8e8c-fe9fb4ccf17a', // Your API key
    settings: {
      from_name: 'Portfolio Contact Form',
      subject: 'New Contact Message from Portfolio Website',
    },
    onSuccess: (msg, data) => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      reset(); // Reset form fields after successful submission
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    },
    onError: (msg, data) => {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: msg
      });
    }
  });

  const onSubmit = async (data) => {
    setFormStatus({ submitting: true, submitted: false, error: null });
    await submit(data);
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Me</h1>
        
        {formStatus.submitted && (
          <div className="success-message">
            <p>Thank you for your message! I'll get back to you soon.</p>
          </div>
        )}
        
        {formStatus.error && (
          <div className="error-message">
            <p>{formStatus.error}</p>
          </div>
        )}
        
        <div className="social-links">
          <h2>Connect With Me</h2>
          <div className="social-icons">
            <a 
              href="https://github.com/vishal-1372" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
              className="social-icon"
            >
              <FaGithub aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/vishal-makwana-" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
              className="social-icon"
            >
              <FaLinkedin aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="/files/Vishal_resume_.pdf" 
              download
              aria-label="Download Resume"
              title="Download Resume"
              className="social-icon"
            >
              <FaFileAlt aria-hidden="true" />
              <span className="sr-only">Resume</span>
            </a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="error-text">{errors.name.message}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <span className="error-text">{errors.email.message}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject (Optional)</label>
            <input
              type="text"
              id="subject"
              placeholder="What is this regarding?"
              {...register("subject")}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows="5"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className="error-text">{errors.message.message}</span>}
          </div>

          {/* Hidden Honeypot field to prevent spam */}
          <input
            type="checkbox"
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>
          
          <button 
            type="submit" 
            className="submit-btn"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
