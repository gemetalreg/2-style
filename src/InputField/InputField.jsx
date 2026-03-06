import styles from "./InputField.module.css";


function InputField({ref}) {
  return (
    <input
      type="text"
      ref={ref}
    />
  );
}

export default InputField;