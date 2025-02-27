import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Support.css';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const supportTeamParams = {
      from_name: name,
      from_email: email,
      issue: issue,
      to_email: 'pro12fessor3@gmail.com',
    };

    const userAcknowledgmentParams = {
      to_name: name,
      user_email: email,
      message: `Hello ${name},\n\nWe have received your support request regarding:\n\n"${issue}"\n\nOur team will review your issue and get back to you as soon as possible. If you need urgent assistance, please reach out to our helpdesk.\n\nBest Regards,\nSupport Team`,
    };

    emailjs.send(serviceId, templateId, supportTeamParams, publicKey)
      .then(() => {
        emailjs.send(serviceId, templateId, userAcknowledgmentParams, publicKey)
          .then(() => {
            alert('Your support request has been sent! A confirmation email has been sent to you.');
            setName('');
            setEmail('');
            setIssue('');
          })
          .catch((error) => {
            console.error('Error sending acknowledgment email:', error);
            alert('Your request was sent, but we couldn’t send a confirmation email.');
          });
      })
      .catch((error) => {
        console.error('Error sending support request:', error);
        alert('Failed to send your request. Please try again later.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="supportForm">
      <h2>Contact Support</h2>
      <p>If you’re facing any issues, please describe your problem below, and our team will assist you.</p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Describe your issue..."
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default Support;
