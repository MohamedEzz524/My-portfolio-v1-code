import "./memoryGame.css";
import { useEffect, useState } from "react";
import reactImg from "../assets/images/REACT.png";
import htmlImg from "../assets/images/HTML.png";
import cssImg from "../assets/images/CSS.png";
import tsImg from "../assets/images/Typescript.png";
import pugImg from "../assets/images/pug.png";
import bsImg from "../assets/images/BS.png";
import sassImg from "../assets/images/SASS.png";
import githubImg from "../assets/images/Github.png";
import Fireworks from "../Animations/Fireworks";

const initialDataMemory = [
  { id: 1, img: reactImg, dataTech: "react" },
  { id: 2, img: reactImg, dataTech: "react" },
  { id: 3, img: htmlImg, dataTech: "html" },
  { id: 4, img: htmlImg, dataTech: "html" },
  { id: 5, img: cssImg, dataTech: "css" },
  { id: 6, img: cssImg, dataTech: "css" },
  { id: 7, img: tsImg, dataTech: "ts" },
  { id: 8, img: tsImg, dataTech: "ts" },
  { id: 9, img: pugImg, dataTech: "pug" },
  { id: 10, img: pugImg, dataTech: "pug" },
  { id: 11, img: bsImg, dataTech: "bs" },
  { id: 12, img: bsImg, dataTech: "bs" },
  { id: 13, img: sassImg, dataTech: "sass" },
  { id: 14, img: sassImg, dataTech: "sass" },
  { id: 15, img: githubImg, dataTech: "github" },
  { id: 16, img: githubImg, dataTech: "github" },
];

export default function MemoryGame({ name }) {
  const [tries, setTries] = useState(0);
  const [dataMemory, setDataMemory] = useState([]); // Shuffled array
  const [flippedBlocks, setFlippedBlocks] = useState([]); // Track indexes of flipped blocks
  const [matchedBlocks, setMatchedBlocks] = useState([]); // Track indexes of matched blocks
  //result
  const [showScore, setShowScore] = useState(false);
  const [show, setShow] = useState(false);
  const [result, setResult] = useState({});

  const shuffleArray = (array) => {
    return array
      .map((element) => ({ ...element, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((element) => {
        delete element.sort;
        return element;
      });
  };

  useEffect(() => {
    const shuffledData = shuffleArray(initialDataMemory);
    setDataMemory(shuffledData);
  }, []);

  const checkTries = () => {
    if (tries <= 8) return setResult({ text: "Excellent", color: "#4caf50" });
    if (tries <= 15) return setResult({ text: "Good", color: "blue" });
    if (tries <= 20) return setResult({ text: "Average", color: "yellow" });
    return setResult({ text: "Excellent", color: "green" });
  };
  const handleFlip = (index) => {
    // Prevent flipping more than two blocks or flipping a matched block or already flipped block
    if (
      flippedBlocks.length === 2 ||
      flippedBlocks.includes(index) ||
      matchedBlocks.includes(index)
    )
      return;
    //flipping first and second
    const newFlippedBlocks = [...flippedBlocks, index];
    setFlippedBlocks(newFlippedBlocks);

    //check if second flip flipped blocks match
    if (newFlippedBlocks.length === 2) {
      const [firstIndex, secondIndex] = newFlippedBlocks;
      setTries((t) => t + 1);

      //check matching
      if (
        dataMemory[firstIndex].dataTech === dataMemory[secondIndex].dataTech
      ) {
        setMatchedBlocks([...matchedBlocks, firstIndex, secondIndex]);
      }
      // Check if the game has ended
      if (matchedBlocks.length + 2 === dataMemory.length) {
        checkTries();

        setTimeout(() => {
          setShowScore(true); // Trigger game over
        }, 50);
        setTimeout(() => {
          setShow(true); // Trigger game over
        }, 500);
      } else {
        // Reset flipped blocks after a short delay
        setTimeout(() => {
          setFlippedBlocks([]);
        }, 1000);
      }
    }
  };

  const restartMemoryGame = () => {
    setShowScore(false);
    setTries(0);
    setFlippedBlocks([]);
    setMatchedBlocks([]);
    setShow(false); //  for the result animation
    setResult({ text: "", color: "" });
    const shuffledData = shuffleArray(initialDataMemory);
    setDataMemory(shuffledData);
  };

  return (
    <div className="memory-game">
      {!showScore ? (
        <>
          <h1>Memory Game</h1>
          {/* board*/}
          <div className="board">
            <span className="left">
              Player Name: <span>{name}</span>
            </span>
            <button
              className="shuffle"
              type="button"
              onClick={restartMemoryGame}
            >
              Shuffle
            </button>
            <span className="right">
              Trials: <span>{tries}</span>
            </span>
          </div>
          {/* game */}
          <div className="game-grid">
            {dataMemory.map((e, index) => {
              return (
                <div
                  key={e.id}
                  className={`game-block ${
                    flippedBlocks.includes(index) ||
                    matchedBlocks.includes(index)
                      ? "flipped"
                      : ""
                  }`}
                  data-tech={e.dataTech}
                  onClick={() => handleFlip(index)}
                >
                  <div className="face front"></div>
                  <div className="face back">
                    <img src={e.img} alt={e.dataTech} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="memory-result">
          <Fireworks />
          <div className={`result ${show ? "show" : ""}`}>
            <p>
              <span style={{ color: result.color }}>{result.text}</span>,{" "}
              <span>{name}!</span> You Solved The Memory Game!
            </p>
            <p>
              Total <span>{tries}</span> tries
            </p>
            <button
              className="restart"
              type="button"
              onClick={restartMemoryGame}
            >
              Restart Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
