import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contactInfo.css";

export default function ContactInfo({ faIcon, infoName, infoData }) {
  return (
    <li className={`info ${infoName}-info`}>
      <div>
        <FontAwesomeIcon
          className="contact-i"
          icon={faIcon}
          size="xl"
        ></FontAwesomeIcon>
      </div>
      <div>
        {infoName}: <br /> <span>{infoData}</span>
      </div>
    </li>
  );
}
