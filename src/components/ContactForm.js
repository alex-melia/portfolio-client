import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        'https://king-prawn-app-kdrzm.ondigitalocean.app/send-email',
        formData
      );
      const { success, message } = response.data;

      setFormData({
        f_name: '',
        l_name: '',
        email: '',
        subject: '',
        message: '',
      });

      setSuccess(success);
      setMessage(message);
    } catch (error) {
      console.error(`Error sending email: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(null);
      setMessage('');
    }, 3000);
    return () => clearTimeout(timer);
  }, [success]);

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name </label>
      <span id='asterisk'>*</span>
      <div className='contact-form-names'>
        <div className='name-fields'>
          <input
            type='text'
            id='f_name'
            name='f_name'
            value={formData.f_name}
            onChange={handleChange}
            required
          />
          <label htmlFor='f_name'>First</label>
        </div>
        <div className='name-fields'>
          <input
            type='text'
            id='l_name'
            name='l_name'
            value={formData.l_name}
            onChange={handleChange}
            required
          />
          <label htmlFor='l_name'>Last</label>
        </div>
      </div>

      <label htmlFor='email'>Email </label>
      <span id='asterisk'>*</span>
      <input
        type='email'
        id='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor='subject'>Subject</label>
      <input
        type='text'
        id='subject'
        name='subject'
        value={formData.subject}
        onChange={handleChange}
      />

      <label htmlFor='message'>Message </label>
      <span id='asterisk'>*</span>
      <textarea
        id='message'
        name='message'
        rows='5'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <div className='contact-form-btn'>
        <button type='submit' disabled={loading}>
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
      <div className='form-msg'>
        {success !== null && (
          <div className={success ? 'success-msg' : 'error-msg'}>
            <p className='msg-text'>{message}</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
