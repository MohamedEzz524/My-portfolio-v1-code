import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "../../Imports/ImportCenter";
import { faArrowUp } from "../../Imports/ImportCenter";
import "./backToHomeButton.css";
import Glowing from "../Glowing/Glowing";

export default function ArrowScrollSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        const homeElement = document.getElementById("home");
        homeElement.getBoundingClientRect().top === 0 //if the offset top of the home element is 0
          ? setIsVisible(false)
          : setIsVisible(true);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <a href="#home" className="arrow-scroll">
        <Glowing glowColor="radial-gradient(circle, #00FFFF , transparent)" />
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </a>
    )
  );
}
