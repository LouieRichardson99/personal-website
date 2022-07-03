import styles from "./styles.module.scss"

export const Input = ({
  name,
  label,
  type,
  required,
  placeholder,
  autoComplete,
}) => (
  <div>
    <label htmlFor={name} className={styles.label}>
      {label}
      {required && <span className={styles.required}>*</span>}
    </label>
    {type === "textarea" ? (
      <textarea
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={styles.textarea}
        required={required}
        rows={5}
      />
    ) : (
      <input
        name={name}
        id={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
        required={required}
      />
    )}
  </div>
)
