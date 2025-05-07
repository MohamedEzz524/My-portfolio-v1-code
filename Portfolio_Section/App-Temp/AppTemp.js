import { useState } from "react";
import "./appTemp.css";
import {
  FontAwesomeIcon,
  faGithub,
  faAngleDown,
  faLink,
  faEnvelope,
} from "../../Imports/ImportCenter"; //local FontAwesome library

export default function AppTemp({ title, href, images, desc, method, link }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowImage = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="react-app">
      <div className="title-description">
        <a
          href={href}
          target="_blank"
          className="title"
          rel="noopener noreferrer"
          title="view in github"
        >
          {title}
          <FontAwesomeIcon icon={faGithub} className="title-git" />
        </a>
        <p className="desc">{desc}</p>
      </div>

      {/* Expanded Part */}
      <div className={`app-images ${isExpanded ? "show" : ""}  `}>
        <div className="method">
          {link && (
            <div className="link">
              <span>Link: </span>
              <FontAwesomeIcon icon={faLink} color="#0ff"></FontAwesomeIcon>
              <a
                className="link-app"
                target="_blank"
                href={link}
                rel="noopener noreferrer"
              >
                {link}
              </a>
            </div>
          )}
          <div className="method-text">
            <span>Method: </span>
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#0ff"
              size="sm"
            ></FontAwesomeIcon>

            <div>{method}</div>
          </div>
        </div>

        <div className="images-container">
          {images.map((img, index) => (
            <img key={index} src={img} alt={title} />
          ))}
        </div>
      </div>
      {/* Expand button  */}
      <div className="show-img" onClick={(e) => handleShowImage(e)}>
        <span style={{ marginRight: "10px" }}>
          {isExpanded ? "Collapse" : "Expand"}
        </span>
        <FontAwesomeIcon
          className={`arrow-show ${isExpanded ? "up" : ""}`}
          icon={faAngleDown}
          size="xl"
        />
      </div>
    </div>
  );
}
