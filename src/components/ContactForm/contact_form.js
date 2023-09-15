import React from "react"

import Button from "../Button/button"

import { ContactFormWrapper } from "./contact_form.styled"

function ContactForm() {
  return (
    <ContactFormWrapper>
      <h2>Contact me!</h2>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <Button>Send</Button>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm
