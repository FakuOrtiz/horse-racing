import { Horse } from "./types";

export const getRandomHex = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

export const generateHorses = (length: number): Horse[] => {
  return new Array(length).fill(null).map(() => ({
    id: Math.floor(Math.random() * 100),
    color: getRandomHex(),
    position: 0,
  }));
};
