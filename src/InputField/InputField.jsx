import styles from "./InputField.module.css";
import React, { forwardRef } from 'react';

const InputField = forwardRef((ref) => {
  return <input type="text" ref={ref} />;
});

export default InputField;