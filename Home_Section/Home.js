import React from "react";
import "./home.css";
import {
  FontAwesomeIcon,
  faDownload,
  faAngleDown,
} from "../Imports/ImportCenter"; //local FontAwesome library
import { useEffect, useState, useRef } from "react";

import myImage from "../assets/images/me-trans1.png";
import Glowing from "../Components/Glowing/Glowing";
import FallingLines from "../Components/Falling-lines/FallingLines";

export default function Home() {
  const [text, setText] = useState("");
  const fullText = "Creative Web Developer";
  const typingSpeed = 100; // Faster and smoother typing
  const animationRef = useRef(null);
  //welcome

  const cvPath = process.env.PUBLIC_URL + "/documents/MohamedE._CV.pdf";

  useEffect(() => {
    let index = 0;
    const typeCharacter = () => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
        animationRef.current = setTimeout(typeCharacter, typingSpeed);
      } else {
        return;
      }
    };
    //slight delay
    animationRef.current = setTimeout(typeCharacter, 200);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []); // Only re-run when showWelcome changes

  return (
    <section className="home" id="home">
      <FallingLines />
      <div className="intro">
        <div className="intro-img">
          <div className="rotating-gear">
            <div className="large-gear">
              <div className="edge"></div>
              <div className="edge"></div>
              <div className="edge"></div>
              <div className="edge"></div>
            </div>
            <div className="between-gear"></div>
          </div>
          <img src={myImage} alt="Mohamed ElSayed" />
        </div>
        <div className="intro-text">
          <div className="my-title">
            <p className="hello">Hello, I am</p>
            <p className="my-name">Mohamed ElSayed</p>
            <p>
              <span
                className="my-subtitle"
                style={{
                  borderRight: "1px solid #e2d1ff",
                }}
              >
                {text}
              </span>
            </p>
            <p className="my-description">
              I design and develop engaging, interactive, and user-friendly web
              experiences.
            </p>
          </div>
          <a
            href={cvPath}
            target="_blank"
            rel="noopener noreferrer"
            download="[MohamedE.]_Frontend_CV.pdf"
            className="btn-download"
          >
            <FontAwesomeIcon className="ic" icon={faDownload} size="sm" />
            Download CV
          </a>
        </div>
      </div>

      <div className="scroll-down">
        <a href="#about" className="scroll-down-arrow">
          <Glowing glowColor="radial-gradient(circle, #6e00ff , #c084fc)  " />
          <FontAwesomeIcon className="arrow" icon={faAngleDown} size="xl" />
        </a>
      </div>
    </section>
  );
}
