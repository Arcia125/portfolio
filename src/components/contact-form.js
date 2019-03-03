import React, { useState } from 'react';

import styles from './contact-form.module.css';

const Field = ({
  name,
  placeholder,
  type,
  ...restProps
}) => {
  const isTextArea = type === 'textarea';
  return (
    <div className={styles.field}>
      <label htmlFor={name}>{name}</label>
      {isTextArea ? <textarea name={name} placeholder={placeholder} rows={5} {...restProps} /> : <input name={name} placeholder={placeholder} type={type} {...restProps} />}
    </div>
  );
}

function createChangeHandler(cb) {
  return e => {
    cb(e.target.value);
  }
}

function encode (data) {
  return Object.keys(data).map(key => `${encodeURIComponent(key)}=${data[key]}`).join("&");
}

const ContactForm = ({
  name,
  method,
  honeypot
}) => {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [messageVal, setMessageVal] = useState("");
  const [success, setSuccess] = useState(false);
  return (
    <div className={styles.container}>
      {success ? (<h2>THANK YOU 😊</h2>) : (
        <>
        <h2>CONTACT ME</h2>
        <form
          className={styles.form}
          name={name}
          method={method}
          data-netlify="true"
          data-netlify-honeypot={honeypot}
          onSubmit={e => {
            e.preventDefault();
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({
                name: nameVal,
                email: emailVal,
                message: messageVal
              })
            }).then(() => {
              setSuccess(true);
            })
          }}
        >
          <input name="form-name" type="hidden" value="contact" />
          <Field name="name" placeholder="Your Name" type="text" value={nameVal} onChange={createChangeHandler(setNameVal)}/>
          <Field name="email" placeholder="example@email.com" type="email" required value={emailVal} onChange={createChangeHandler(setEmailVal)} />
          <Field name="message" placeholder="Message" type="textarea" value={messageVal} onChange={createChangeHandler(setMessageVal)} />
          <button className={styles.button} type="submit">SUBMIT</button>
        </form>
      </>
      )}
    </div>
  );
}

export { ContactForm };
