import React, { useState } from 'react';
import { Styled, css } from 'theme-ui';

import styles from './contact-form.module.css';

const Field = ({ name, placeholder, type, ...restProps }) => {
  const isTextArea = type === 'textarea';
  return (
    <div className={styles.field}>
      <label
        css={css({
          color: 'text',
        })}
        htmlFor={name}
      >
        {name}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={5}
          {...restProps}
        />
      ) : (
        <input
          name={name}
          placeholder={placeholder}
          type={type}
          {...restProps}
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
    <Styled.div
      css={css({
        padding: 10,
        '::before': {
          content: '""',
          position: 'absolute',
          backgroundColor: 'background',
          left: 0,
          zIndex: -1,
          height: '100%',
          width: '100%',
        },
      })}
    >
      <Styled.div
        css={css({
          bg: 'raised',
        })}
        className={styles.container}
      >
        {success ? (
          <Styled.h2
            css={css({
              color: 'text',
            })}
          >
            THANK YOU 😊
          </Styled.h2>
        ) : (
          <>
            <Styled.h2
              css={css({
                color: 'text',
              })}
            >
              CONTACT ME
            </Styled.h2>
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
                  Don’t fill this out if you're human:{' '}
                  <input
                    name={honeypot}
                    value={honeypotVal}
                    onChange={createChangeHandler(setHoneypotVal)}
                  />
                </label>
              </p>
              <Field
                name="name"
                placeholder="Your Name"
                type="text"
                value={nameVal}
                onChange={createChangeHandler(setNameVal)}
              />
              <Field
                name="email"
                placeholder="example@email.com"
                type="email"
                required
                value={emailVal}
                onChange={createChangeHandler(setEmailVal)}
              />
              <Field
                name="message"
                placeholder="Message"
                type="textarea"
                value={messageVal}
                onChange={createChangeHandler(setMessageVal)}
              />
              <button className={styles.button} type="submit">
                SUBMIT
              </button>
            </form>
          </>
        )}
      </Styled.div>
    </Styled.div>
  );
};

export { ContactForm };
