import styles from "./InputField.module.css";


function InputField({props, ref}) {
  return (
    <input
      type="text"
      {...props}
      ref={ref}
    />
  );
}

export default InputField;