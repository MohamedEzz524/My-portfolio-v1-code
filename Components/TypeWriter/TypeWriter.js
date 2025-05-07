import { useState, useEffect, useRef } from "react";
import "./typeWriter.css";

export default function TypeWriter({ text, speed = 100, cursor = true }) {
  const [displayText, setDisplayText] = useState("");
  const animationRef = useRef(null);

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
        animationRef.current = setTimeout(type, speed);
      }
    };

    animationRef.current = setTimeout(type, speed);

    return () => clearTimeout(animationRef.current);
  }, [text, speed]);

  return (
    <>
      {displayText}
      {cursor && <span className="cursor">|</span>}
    </>
  );
}
