import styles from "./InputField.module.css";
import React, { forwardRef } from 'react';

const InputField = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props}/>;
});

export default InputField;