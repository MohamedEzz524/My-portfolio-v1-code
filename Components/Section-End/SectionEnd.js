import "./sectionEnd.css";
import {
  FontAwesomeIcon,
  faQuoteLeft,
  faQuoteRight,
} from "../../Imports/ImportCenter"; //local FontAwesome library

export default function SectionEnd({ quote, name, backgroundImage }) {
  return (
    <div
      className="about-img"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <FontAwesomeIcon className="ic" icon={faQuoteLeft} size="2xs" /> {quote}
      <FontAwesomeIcon className="ic" icon={faQuoteRight} size="2xs" />{" "}
      <span>{name}</span>
    </div>
  );
}
