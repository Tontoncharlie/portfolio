"use client";

import React, { useState } from 'react';
import styles from './input.module.css';

const Input = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/xzzgkgar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.input}>
      <div className={styles.in1}>
        <input
          className={styles.place}
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className={styles.place}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
      </div>

      <input
        className={styles.place}
        type="text"
        name="subject"
        placeholder="Subject"
        required
      />
      <textarea
        className={styles.place}
        name="message"
        placeholder="Message"
        rows="5"
        required
      ></textarea>

      <div className={styles.btnWrapper}>
        <button className={styles.sendBtn} type="submit">
          Send Message
        </button>
      </div>

      {submitted && (
        <p style={{ color: "green", marginTop: "1rem" }}>
          ✅ Message sent successfully!
        </p>
      )}
      {error && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ❌ Something went wrong. Try again later.
        </p>
      )}
    </form>
  );
};

export default Input;
