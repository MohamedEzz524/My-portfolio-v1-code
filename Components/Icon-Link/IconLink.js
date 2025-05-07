import "./iconLink.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLink({ alink, faIcon, content }) {
  return (
    <li className="icon-link" data-after={content}>
      <a href={alink} target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="link-i"
          icon={faIcon}
          size="2xl"
        ></FontAwesomeIcon>
      </a>
    </li>
  );
}
