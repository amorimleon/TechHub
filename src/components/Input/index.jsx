import styles from "./style.module.scss";
import { forwardRef } from "react";

export const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.input__container}>
      <label className="Headline">{label}</label>
      <input ref={ref} {...rest} />
      <p className={styles.message}>{error?.message}</p>
    </div>
  );
});
export const Select = forwardRef(({ children, label, error, ...rest }, ref) => {
  return (
    <div  className={styles.input__container}>
    <label className="Headline">{label}</label>
      <select ref={ref} {...rest}>
        {children}
      </select>
      <p className={styles.message}>{error?.message}</p>
    </div>
  );
});
