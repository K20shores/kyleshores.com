import React from "react"

import Button from "../Button/button"

import { ContactFormWrapper } from "./contact_form.styled"

function ContactForm() {
  return (
    <ContactFormWrapper>
      <h2>Contact me!</h2>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <Button type="submit">Send</Button>
      </form>
    </ContactFormWrapper>
  )
}

export default ContactForm
