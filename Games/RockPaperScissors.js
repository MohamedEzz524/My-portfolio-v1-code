import "./rockPaperScissors.css";
import { FontAwesomeIcon } from "../Imports/ImportCenter";
import {
  faHandScissors,
  faCheckDouble,
  faEquals,
  faHandPaper,
  faHandRock,
} from "../Imports/ImportCenter";
import { useState } from "react";

export default function RockPaperScissors({ name }) {
  const [yourChoice, setYourChoice] = useState("");
  const [pcChoice, setPcChoice] = useState("");
  const [yourScore, setYourScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);
  const [winner, setWinner] = useState("");
  const choices = ["PAPER", "ROCK", "SCISSORS"];

  const getPcRandomChoice = () => {
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
  };

  const checkResult = (playerChoice, computerChoice) => {
    if (
      (playerChoice === "PAPER" && computerChoice === "ROCK") ||
      (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
      (playerChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
      setYourScore((prev) => prev + 1); // Increment your score
      setWinner("Player wins");
    } else if (playerChoice === computerChoice) return setWinner("Equal");
    else {
      setPcScore((prev) => prev + 1); // Increment PC's score
      setWinner("Computer wins");
    }
  };

  const setRock = () => {
    setYourChoice("ROCK");
    const pcRandomChoice = getPcRandomChoice();
    setPcChoice(pcRandomChoice);
    checkResult("ROCK", pcRandomChoice);
  };
  const setPaper = () => {
    setYourChoice("PAPER");
    const pcRandomChoice = getPcRandomChoice();
    setPcChoice(pcRandomChoice);
    checkResult("PAPER", pcRandomChoice);
  };
  const setScissors = () => {
    setYourChoice("SCISSORS");
    const pcRandomChoice = getPcRandomChoice();
    setPcChoice(pcRandomChoice);
    checkResult("SCISSORS", pcRandomChoice);
  };

  const resetRPSGame = () => {
    setPcChoice("");
    setYourChoice("");
    setPcScore(0);
    setYourScore(0);
    setWinner("");
  };

  return (
    <div className="rps-game">
      <div className="rps-title">
        <h4>
          {" "}
          Welcome, <span>{name}</span>
        </h4>
        <h1> Rock, Paper, Scissors Game</h1>
      </div>
      <div className="btns">
        <button className="rps-btn" onClick={setRock}>
          <FontAwesomeIcon className="ic" icon={faHandRock} size="2xl" />
          ROCK
        </button>
        <button className="rps-btn" onClick={setPaper}>
          <FontAwesomeIcon className="ic" icon={faHandPaper} size="2xl" />
          PAPER
        </button>
        <button className="rps-btn" onClick={setScissors}>
          <FontAwesomeIcon className="ic" icon={faHandScissors} size="2xl" />
          SCISSORS
        </button>
      </div>
      <div className="rps-result">
        <div className="choice your-choice">
          Your Choice: <span>{yourChoice}</span>
          {winner === "Player wins" ? (
            <FontAwesomeIcon
              className="success"
              icon={faCheckDouble}
              size="sm"
            />
          ) : winner === "Equal" ? (
            <FontAwesomeIcon className="equal" icon={faEquals} size="sm" />
          ) : (
            ""
          )}
        </div>
        <div className="choice pc-choice">
          Computer's Choice: <span>{pcChoice}</span>
          {winner === "Computer wins" ? (
            <FontAwesomeIcon
              className="success"
              icon={faCheckDouble}
              size="sm"
            />
          ) : winner === "Equal" ? (
            <FontAwesomeIcon className="equal" icon={faEquals} size="sm" />
          ) : (
            ""
          )}
        </div>
        <div className="score your-score">
          Your Score: <span>{yourScore}</span>
        </div>
        <div className="score pc-score">
          Computer's Score: <span>{pcScore}</span>
        </div>
        <button className="reset-btn" type="button" onClick={resetRPSGame}>
          Reset
        </button>
      </div>
    </div>
  );
}
