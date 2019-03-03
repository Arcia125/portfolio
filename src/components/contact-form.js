import React from 'react';

import styles from './contact-form.module.css';

const Field = ({
  name,
  placeholder,
  type
}) => {
  const isTextArea = type === 'textarea';
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{name}</label>
      {isTextArea ? <textarea name={name} placeholder={placeholder} rows={5} /> : <input name={name} placeholder={placeholder} type={type} />}
    </div>
  );
}

const ContactForm = ({
  name,
  method,
  honeypot
}) => (
  <div className={styles.container}>
    <h2>CONTACT ME</h2>
    <form
      className={styles.form}
      name={name}
      method={method}
      data-netlify="true"
      data-netlify-honeypot={honeypot}
    >
      <Field name="name" placeholder="Your Name" type="text"/>
      <Field name="email" placeholder="example@email.com" type="email" required />
      <Field name="message" placeholder="Message" type="textarea" />
      <button className={styles.button} type="submit">SUBMIT</button>
    </form>
  </div>
);

export { ContactForm };
