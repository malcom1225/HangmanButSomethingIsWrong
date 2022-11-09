import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

interface KeyboardProps {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void; 
  disabled?: boolean;
}

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false
}: KeyboardProps) => {
  return (
    <div className={styles.keyboard}>
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            disabled={isInactive || isActive || disabled}
            key={key}
            className={`${styles.keybtn}
              ${isActive ? styles.active : ""}
              ${isInactive ? styles.inactive : ""}`}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
