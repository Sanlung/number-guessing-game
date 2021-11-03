const getGuessMessage = (guess, numberToGuess) => {
  const distanceApart = Math.abs(numberToGuess - guess);
  return guess < numberToGuess
    ? distanceApart > 10
      ? "Your guess was well below the number."
      : "Your guess was a little below the number."
    : distanceApart > 10
    ? "Your guess was well above the number."
    : "Your guess was a little above the number.";
};

const GuessMessage = ({guess, numberToGuess, numberOfGuesses}) => (
  <div>
    {guess && <p>{getGuessMessage(guess, numberToGuess)}</p>}
    <p>Guesses so far: {numberOfGuesses}</p>
  </div>
);

export default GuessMessage;
