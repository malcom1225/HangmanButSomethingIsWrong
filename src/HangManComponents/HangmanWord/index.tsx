import styles from "./HangmanWord.module.css";

interface HangmanWordProps {
  guessedLetters?: string[];
  quizzWord?: string;
  reveal?: boolean;
}

const HangmanWord = ({
  guessedLetters,
  quizzWord,
  reveal,
}: HangmanWordProps) => {
  return (
    <div className={styles.word}>
      {quizzWord?.split("").map((letter, index) => (
        <span className={styles.letter} key={index}>
          <span
            className={`${guessedLetters?.includes(letter) || reveal ?
                styles.show :
                styles.hide} 
              ${!guessedLetters?.includes(letter) && reveal ?
                styles.reveal : ""}`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
