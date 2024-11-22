import styles from "./styles.module.css";
import { Horse } from "../../types";
import HorseLine from "../HorseLine";

const Race = ({ horses }: { horses: Horse[] }) => {
  return (
    <div className={styles.pitch}>
      {horses.map((horse, i) => (
        <HorseLine horse={horse} index={i} key={i} />
      ))}

      <div className={styles.goal} />
    </div>
  );
};

export default Race;
