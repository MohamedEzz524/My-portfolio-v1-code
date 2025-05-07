import "./confirmationMsg.css";
import { FontAwesomeIcon, faCircleCheck } from "../../Imports/ImportCenter";

export default function ConfirmationMsg({ message }) {
  return (
    <div className="confirmation">
      <FontAwesomeIcon
        className="successful"
        icon={faCircleCheck}
        size="xl"
      ></FontAwesomeIcon>
      {message}
    </div>
  );
}
