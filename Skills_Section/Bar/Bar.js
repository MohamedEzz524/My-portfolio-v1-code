import { FontAwesomeIcon } from "../../Imports/ImportCenter";
import "./bar.css";

export default function Bar({
  name,
  color,
  percentage,
  linearGrad,
  percentageColor,
  percentageBg,
  perText,
  barContrast,
  barBg,
  barIcon,
}) {
  return (
    <div
      className="bar-content"
      style={{
        "--title-color": color,
        "--percentage-text-color": perText,
        "--object-width": percentage,
        "--linearGrad": linearGrad,
        "--percentage-color": percentageColor,
        "--percentageBg-color": percentageBg,
        "--barContrast": barContrast,
        "--barBg": barBg,
      }}
    >
      <span className="object-name">
        <FontAwesomeIcon icon={barIcon} className="bar-icon" />
        {name}
      </span>
      <div className="bar">
        <div className="bar-fill" style={{ width: percentage }}></div>
        <span className="per">
          {percentage}
          <span className="per-arrow"></span>
        </span>
      </div>
    </div>
  );
}
