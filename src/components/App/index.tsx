import styles from "./styles.module.css";
import { useEffect, useState } from "preact/hooks";
import { Game, Horse } from "../../types";
import { generateHorses } from "../../utils";
import Race from "../Race";
import SelectCompetitors from "../SelectCompetitors";
import Button from "../Button";

export function App() {
  const [game, setGame] = useState<Game>("NOT_STARTED");
  const [horses, setHorses] = useState<Horse[]>([]);
  const [intervalRef, setIntervalRef] = useState<number | null>(null);

  useEffect(() => {
    getNewHorses(2);
  }, []);

  const startGame = () => {
    if (game === "STARTED") return;

    setGame("STARTED");

    let thereIsWinner = false;

    const intervalId = setInterval(() => {
      setHorses((prev) => {
        return prev.map((horse) => {
          if (thereIsWinner) return horse;

          let newPosition = horse.position + Math.floor(Math.random() * 5) + 1;

          if (newPosition >= 100 && !thereIsWinner) {
            newPosition = 100;
            thereIsWinner = true;
            clearInterval(intervalId);
            setIntervalRef(null);
            setGame("FINISHED");
          }

          return {
            ...horse,
            position: newPosition,
          };
        });
      });
    }, 500);
    setIntervalRef(intervalId);
  };

  const cancelGame = () => {
    resetHorses();

    clearInterval(intervalRef!);
    setIntervalRef(null);

    setGame("NOT_STARTED");
  };

  const getNewHorses = (length: number) => {
    if (game !== "NOT_STARTED") setGame("NOT_STARTED");
    setHorses(generateHorses(length));
  };

  const resetHorses = () => setHorses((prev) => prev.map((horse) => ({ ...horse, position: 0 })));

  const newCompetitors = () => {
    if (game !== "NOT_STARTED") setGame("NOT_STARTED");
    getNewHorses(horses.length);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>🏇 Horse racing 🏇</h1>

      <article className={styles.buttonsContainer}>
        {game === "FINISHED" && (
          <div className={styles.twoButtonsContainer}>
            <Button label="Reset" action={cancelGame} type="PRIMARY" />
            <Button label="New competitors" action={newCompetitors} type="SECONDARY" />
          </div>
        )}

        {game === "NOT_STARTED" && horses.length > 0 && (
          <div className={styles.twoButtonsContainer}>
            <Button label="Start" action={startGame} type="PRIMARY" />
            <Button label="New competitors" action={newCompetitors} type="SECONDARY" />
          </div>
        )}

        {game === "STARTED" && <Button label="Reset" action={cancelGame} type="SECONDARY" />}

        {game !== "STARTED" && <SelectCompetitors horses={horses} getNewHorses={getNewHorses} />}
      </article>

      <Race horses={horses} />
    </main>
  );
}
