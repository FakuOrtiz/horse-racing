import { Horse } from "../../types";
import styles from "./styles.module.css";

interface Props {
  horse: Horse;
  index: number;
}

const HorseLine = ({ horse, index }: Props) => {
  const { id, color, position } = horse;

  let isWinner = position === 100;

  return (
    <div className={`${styles.line} ${index % 2 === 0 ? styles.even : ""} ${isWinner ? styles.winner : ""}`}>
      <div className={styles.containerHorse} style={{ width: `${position}%` }}>
        <div className={styles.horse} style={{ background: color }}>
          <p>{id < 10 ? `0${id}` : id}</p>
        </div>
      </div>
    </div>
  );
};

export default HorseLine;
