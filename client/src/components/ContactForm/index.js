import React, { Component } from "react";

class ContactForm extends Component {
    render () {
    return (
        <div id="contact-form">
          <h2>Say hello!</h2>
          <p>Note: Please use the menu feature or call us directly to place an order. </p>
          <form>
            <label for="name">Your Name:</label>
            <input type="text" id="name" required />
            <label for="email">Your Email:</label>
            <input type="email" id="email" required />
            <label for="message">Message</label>
            <textarea id="message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
    );
    }
}

export default ContactForm;