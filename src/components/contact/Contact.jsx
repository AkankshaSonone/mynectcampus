import React from "react";
import Back from "../common/back/Back";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2n50maj", "template_qjiryop", e.target, "2-xhiVdYL21VXBFUJ")
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Failed to send email! Please try again.');
        }
      );
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className='flexSB'>
                <input type='text' name='name' placeholder='Name' required />
                <input type='email' name='email' placeholder='Email' required />
              </div>
              <input type='text' name='subject' placeholder='Subject' required />
              <textarea
                name='message'
                cols='30'
                rows='10'
                placeholder='Create a message here...'
                required
              ></textarea>
              <button type='submit' className='primary-btn'>
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
