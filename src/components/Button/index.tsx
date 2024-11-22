import styles from "./styles.module.css";

interface Props {
  action: () => void;
  label: string;
  type: "PRIMARY" | "SECONDARY";
}

const Button = ({ action, label, type }: Props) => {
  const getTypeStyes = {
    PRIMARY: styles.primary,
    SECONDARY: styles.secondary,
  };

  return (
    <button onClick={action} className={`${styles.button} ${getTypeStyes[type]}`}>
      {label}
    </button>
  );
};

export default Button;
