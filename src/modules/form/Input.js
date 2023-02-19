import React from 'react';
import styles from './form.module.css'

export default function Input({event, text, num, setNum, type, placeholder}) {
  return (
    <div className={styles.form_control}>

      <label htmlFor={num}>{text}</label>
      <input
        type={type}
        id={num}
        placeholder={placeholder}
        onChange={(event) => setNum(event.target.value)}
        required
      />
    </div>
  );
}