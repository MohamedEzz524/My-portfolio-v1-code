import { FontAwesomeIcon } from "../../Imports/ImportCenter";
import "./temp.css";
import { useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Temp({
  href,
  hrefGit,
  alt,
  large,
  small,
  type,
  colors,
  designSkills,
  description,
}) {
  const [watching, setWatching] = useState(false);

  const handleWatching = (e) => {
    setWatching(true);
    setTimeout(() => {
      setWatching(false);
    }, 8000);
  };
  return (
    <div className="design-wrapper" style={{ "--linear-grad": colors }}>
      <div className="temp-header">
        <p className="design-title">{type}</p>
      </div>
      <div className="design-up">
        <div className="design-level">
          {designSkills.map((skill, index) => (
            <span className="level" key={index}>
              {skill}
            </span>
          ))}
        </div>
        <button
          type="button"
          className={`show-both ${watching ? "watching-activated" : ""}`}
          onClick={(e) => handleWatching(e)}
          disabled={watching}
        >
          {watching ? "🔘" : "▶"} Play Both
        </button>
      </div>

      <div className="designs-container">
        <a
          href={href}
          target="_blank"
          className="design-container large"
          rel="noopener noreferrer"
          title="view in window"
        >
          <p className="design-label design-label--phone">Click to view</p>
          <p className="design-label design-label--desktop">Hover to view</p>
          <div className="image-carousel large">
            <img src={large} alt={alt} className="design" />
            <div className="overlay"></div>
          </div>
        </a>

        {/* Animation End */}
        <a
          href={href}
          target="_blank"
          className="design-container small"
          title="view in window"
          rel="noopener noreferrer"
        >
          <p className="design-label design-label--phone">Small Screen</p>
          <p className="design-label design-label--desktop">Small Screen</p>
          <div className="image-carousel small">
            <img src={small} alt={alt} className="design" />
            <div className="overlay"></div>
          </div>
        </a>
      </div>

      <div className="design-bottom">
        <div className="design-description" title={alt}>
          {description}
        </div>
        <div className="github-container">
          <a
            href={hrefGit}
            target="_blank"
            title="View on Github"
            className="github-btn"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
}
