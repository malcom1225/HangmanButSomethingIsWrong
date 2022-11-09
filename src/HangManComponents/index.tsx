import { useCallback, useEffect, useState } from "react";
import styles from "./HangMan.module.css"
import words from "../wordsList.json";
import HangmanLynch from "./HangmanLynch/indext";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

const getWord = () => words[Math.floor(Math.random() * words.length)];

const Hangman = () => {
  const [quizzWord, setQuizzWord] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(letter => !quizzWord.includes(letter));

  const isLose = incorrectLetters.length >= 6;
  const isWin = quizzWord.split("").every(letter => guessedLetters.includes(letter));
  
  const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter) || isLose || isWin) return;
      setGuessedLetters(currentLetters => [...currentLetters, letter]);
    },[guessedLetters, isWin, isLose]);
  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();

      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setQuizzWord(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className={styles.hangman}>
      <div className={styles.result}>
        {isWin && "YOU GOT IT MAN! - REFRESH TO PLAY MORE"}
        {isLose && "NICE TRY! - REFRESH TO TRY AGAIN"}
      </div>
      <HangmanLynch entryNumber={incorrectLetters.length} />
      <HangmanWord
        reveal={isLose}
        guessedLetters={guessedLetters}
        quizzWord={quizzWord}
      />
      <div className={styles.keyboardisplay}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            quizzWord.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWin || isLose}
        />
      </div>
    </div>
  );
}

export default Hangman;
