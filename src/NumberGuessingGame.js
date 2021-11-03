import React from "react";
import GuessControl from "./GuessControl";
import GuessMessage from "./GuessMessage";
import GameOver from "./GameOver";

/**
 *
 * Returns a random integer number from 1-100 inclusive
 */

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const MAX_ATTEMPTS = 5;

const gameReducer = (state, action) => {
  switch (action.type) {
    case "MAKE_A_GUESS":
      return {
        ...state,
        numberOfGuesses: state.numberOfGuesses + 1,
        latestGuess: action.payload,
      };
    case "RESET_GAME":
      return {
        ...state,
        numberToGuess: getRandomNumber(),
        numberOfGuesses: 0,
        latestGuess: null,
      };
    default:
      throw new Error();
  }
};

const NumberGuessingGame = () => {
  const [gameState, dispatchGameState] = React.useReducer(gameReducer, {
    numberToGuess: getRandomNumber(),
    numberOfGuesses: 0,
    latestGuess: null,
  });

  const handleGuess = (guess) => {
    console.log(typeof guess);
    dispatchGameState({
      type: "MAKE_A_GUESS",
      payload: guess,
    });
  };

  const handleReset = () => {
    dispatchGameState({
      type: "RESET_GAME",
    });
  };

  const isCorrectGuess = gameState.latestGuess === gameState.numberToGuess;

  const isGameOver =
    isCorrectGuess || gameState.numberOfGuesses === MAX_ATTEMPTS;

  return (
    <div>
      <h1>Number Guessing Game</h1>
      <h2>I'm thinking of a number from 1 to 100.</h2>
      <h2>
        Can you guess the number I am thinking of in {MAX_ATTEMPTS} tries?
      </h2>
      <GuessControl onGuess={handleGuess} />
      {isGameOver ? (
        <GameOver hasWon={isCorrectGuess} onReset={handleReset} />
      ) : (
        <GuessMessage
          guess={gameState.latestGuess}
          numberToGuess={gameState.numberToGuess}
          numberOfGuesses={gameState.numberOfGuesses}
        />
      )}
    </div>
  );
};

export default NumberGuessingGame;
