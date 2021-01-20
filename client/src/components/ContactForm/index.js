import React, { Component } from "react";

class ContactForm extends Component {
    render () {
    return (
        <div id="contact-form">
          <p>Note: Please use the menu feature or call us directly to place an order. </p>
          <form>
            <div className="contact-form-row">
              <label for="name">Your Name:</label>
              <input type="text" id="name" required />
            </div>
            
            <div className="contact-form-row">  
              <label for="email">Your Email:</label>
              <input type="email" id="email" required />
            </div>

            <div className="contact-form-row">
              <label for="message">Message</label>
              <textarea id="message" required />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
    );
    }
}

export default ContactForm;