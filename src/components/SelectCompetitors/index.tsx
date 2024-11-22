import styles from "./styles.module.css";
import { Horse } from "../../types";

interface Props {
  horses: Horse[];
  getNewHorses: (length: number) => void;
}

const SelectCompetitors = ({ horses, getNewHorses }: Props) => {
  const onChange = (e: any) => getNewHorses(Number(e.target!.value));

  return (
    <select value={horses.length || ""} className={styles.select} onChange={onChange}>
      <option value="" disabled hidden>
        Competitors
      </option>

      {new Array(10).fill(null).map((_, i) => {
        if (i === 0) return;
        return <option value={i + 1}>Competitors: {i + 1}</option>;
      })}
    </select>
  );
};

export default SelectCompetitors;
