import React, { useState } from 'react';

import * as styles from './contact-form.module.css';
import LayoutContainer from './layout-container';

const Field = ({ name, label, placeholder, type, ...restProps }) => {
  const isTextArea = type === 'textarea';
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {isTextArea ? (
        <textarea
          rows={6}
          {...restProps}
          id={name}
          name={name}
          placeholder={placeholder}
          className={styles.input}
        />
      ) : (
        <input
          {...restProps}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          className={styles.input}
        />
      )}
    </div>
  );
};

function createChangeHandler(cb) {
  return e => {
    cb(e.target.value);
  };
}

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${data[key]}`)
    .join('&');
}

const ContactForm = ({ name, method, honeypot }) => {
  const [honeypotVal, setHoneypotVal] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [messageVal, setMessageVal] = useState('');
  const [success, setSuccess] = useState(false);
  return (
    <LayoutContainer>
      <section className={styles.contactSection} id="contact">
        <p className="eyebrow">Contact</p>
        <div className={styles.columns}>
          <div>
            <h2 className="section-heading">Get in touch</h2>
            <p className={styles.blurb}>
              Have a role, a project, or just a question about something I
              built? Send a message — or email{' '}
              <a href="mailto:contact@kevinmhallett.com">
                contact@kevinmhallett.com
              </a>{' '}
              directly.
            </p>
          </div>
          {success ? (
            <p className={styles.success} role="status">
              Message sent — thanks. I'll get back to you soon.
            </p>
          ) : (
            <form
              className={styles.form}
              name={name}
              method={method}
              data-netlify="true"
              data-netlify-honeypot={honeypot}
              onSubmit={e => {
                e.preventDefault();
                fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: encode({
                    'form-name': name,
                    name: nameVal,
                    email: emailVal,
                    message: messageVal,
                    [honeypot]: honeypotVal,
                  }),
                }).then(() => {
                  setSuccess(true);
                });
              }}
            >
              <p className={styles.hidden}>
                <label>
                  Don't fill this out if you're human:{' '}
                  <input
                    name={honeypot}
                    value={honeypotVal}
                    onChange={createChangeHandler(setHoneypotVal)}
                  />
                </label>
              </p>
              <Field
                name="name"
                label="Name"
                placeholder="Your name"
                type="text"
                value={nameVal}
                onChange={createChangeHandler(setNameVal)}
              />
              <Field
                name="email"
                label="Email"
                placeholder="you@example.com"
                type="email"
                required
                value={emailVal}
                onChange={createChangeHandler(setEmailVal)}
              />
              <Field
                name="message"
                label="Message"
                placeholder="What can I help with?"
                type="textarea"
                value={messageVal}
                onChange={createChangeHandler(setMessageVal)}
              />
              <button className={styles.button} type="submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </section>
    </LayoutContainer>
  );
};

export { ContactForm };
